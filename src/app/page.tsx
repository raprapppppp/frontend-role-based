"use client"
import Button from "@/components/Button"
import Input from "@/components/Input"
import React, { useState } from "react"
import { User, Lock, UserPlus, LogIn } from "lucide-react"
import { CreateAccount, LoginAccount } from "@/api/Routes"

type Account = {
	Firstname: string
	Lastname: string
	Username: string
	Password: string
}
type Login = {
	Username: string
	Password: string
}

const Home = () => {
	const [isLogin, setIsLogin] = useState<boolean>(true) // Explicit boolean type
	const [loginAcc, setLoginAcc] = useState<Login>({
		Username: "",
		Password: "",
	})
	const [confirmPassword, setConfirmPassword] = useState<string>("")
	const [createAcc, setCreateAccount] = useState<Account>({
		Firstname: "",
		Lastname: "",
		Username: "",
		Password: "",
	})
	const [message, setMessage] = useState<string>("")

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const response = await LoginAccount(loginAcc)
		console.log(response)
		if (response.alert === "succesfull login") {
			setLoginAcc({
				Username: "",
				Password: "",
			})
			setMessage("Succesfully Login")
		} else if (response.error === "Password does not match") {
			setMessage("Incorrect username or Password")
		} else if (response.error === "User not exist") {
			setMessage("User not found")
		}
	}

	const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setLoginAcc((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleChangeRegistered = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target

		setCreateAccount((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const HandleRegisteredForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (confirmPassword !== createAcc.Password) {
			setMessage("Password not match")
		} else {
			const response = await CreateAccount(createAcc)
			if (response === 406) {
				setMessage("Username Already Exist")
			} else if (response === true) {
				setCreateAccount({
					Firstname: "",
					Lastname: "",
					Username: "",
					Password: "",
				})
				setConfirmPassword("")
				setMessage("Account succesfully created")
			}
		}
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
			<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
					{isLogin ? "Login" : "Create Account"}
				</h2>

				{message && (
					<div
						className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-md relative mb-4"
						role="alert">
						<span className="block sm:inline">{message}</span>
					</div>
				)}

				{/*Login Form*/}
				{isLogin && (
					<form onSubmit={handleLogin} className="space-y-5">
						<>
							<Input
								type="text"
								name="Username"
								placeholder="Username"
								value={loginAcc.Username}
								onChange={(e) => handleChangeLogin(e)}
								icon={User}
							/>
							<Input
								type="password"
								name="Password"
								placeholder="Password"
								value={loginAcc.Password}
								onChange={(e) => handleChangeLogin(e)}
								icon={Lock}
							/>
						</>
						<Button type="submit" className="w-full">
							{isLogin ? (
								<>
									<LogIn className="mr-2" size={20} /> Login
								</>
							) : (
								<>
									<UserPlus className="mr-2" size={20} /> Create Account
								</>
							)}
						</Button>
					</form>
				)}

				{/*Registered Form*/}
				{!isLogin && (
					<form onSubmit={HandleRegisteredForm} className="space-y-5">
						<>
							<Input
								type="text"
								name="Username"
								placeholder="Username"
								value={createAcc.Username}
								onChange={(e) => handleChangeRegistered(e)}
								icon={User}
							/>
							<Input
								type="password"
								name="Password"
								placeholder="Password"
								value={createAcc.Password}
								onChange={(e) => handleChangeRegistered(e)}
								icon={Lock}
							/>

							<Input
								type="password"
								name="ConfirmedPassword"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								icon={Lock}
							/>
							<Input
								type="text"
								name="Firstname"
								placeholder="Firstname"
								value={createAcc.Firstname}
								onChange={(e) => handleChangeRegistered(e)}
								icon={User}
							/>
							<Input
								type="text"
								name="Lastname"
								placeholder="Lastname"
								value={createAcc.Lastname}
								onChange={(e) => handleChangeRegistered(e)}
								icon={User}
							/>
						</>
						<Button type="submit" className="w-full">
							{isLogin ? (
								<>
									<LogIn className="mr-2" size={20} /> Login
								</>
							) : (
								<>
									<UserPlus className="mr-2" size={20} /> Create Account
								</>
							)}
						</Button>
					</form>
				)}

				<p className="text-center text-gray-600 mt-6">
					{isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
					<button
						type="button" // Added type for button
						onClick={() => {
							setIsLogin(!isLogin)
							setMessage("")

							setConfirmPassword("")
						}}
						className="text-blue-600 hover:text-blue-800 font-medium">
						{isLogin ? "Sign Up" : "Login"}
					</button>
				</p>
			</div>
		</div>
	)
}

export default Home

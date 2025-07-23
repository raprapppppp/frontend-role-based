"use client"
import React, { useEffect, useState } from "react"
import { CircleUser } from "lucide-react"
import { GetProfile } from "@/api/Routes"
import { useTodoProfile } from "@/store/todoStore"

const Nav = () => {
	const { profile, setProfile } = useTodoProfile()

	useEffect(() => {
		setProfile()
	}, [])

	return (
		<nav className="flex justify-between items-center px-10 py-5 bg-green-800 text-white font-bold text-xl shadow-2xl">
			<div>Card MRI</div>
			<div className="flex gap-2">
				<CircleUser />
			</div>
		</nav>
	)
}

export default Nav

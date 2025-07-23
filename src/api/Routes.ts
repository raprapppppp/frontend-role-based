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
type Task = {
	ID: number
	Task: string
	Completed: boolean
}

type SingleTask = {
	Task: string
}

export async function CreateAccount(account: Account) {
	const response = await fetch("http://localhost:4000/create", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		body: JSON.stringify(account),
	})

	if (!response.ok) {
		return response.status
	}

	return response.ok
}

export async function LoginAccount(account: Login) {
	const response = await fetch("http://localhost:4000/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		body: JSON.stringify(account),
	})

	const result = await response.json()

	return result
}

export async function GetTodos() {
	const response = await fetch("http://localhost:4000/task/get", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
	})
	const tasks: Task[] = await response.json()
	console.log(tasks)
	return tasks
}

export async function CreateTask(task: SingleTask) {
	const response = await fetch("http://localhost:4000/task/create", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		body: JSON.stringify(task),
	})

	const tasks = await response.json()
	return tasks
}

export async function DeleteTask(task: Task) {
	const response = await fetch("http://localhost:4000/task/delete", {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		body: JSON.stringify(task),
	})

	return response
}

export async function UpdateTask(task: Task) {
	const response = await fetch("http://localhost:4000/task/update", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
		body: JSON.stringify(task),
	})

	const upData = await response.json()
	return upData
}

export async function GetProfile() {
	const response = await fetch("http://localhost:4000/task/profile", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
	})

	const profile = await response.json()
	return profile
}

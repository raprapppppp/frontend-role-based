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
	const tasks = await response.json()

	console.log(tasks)
	return tasks
}

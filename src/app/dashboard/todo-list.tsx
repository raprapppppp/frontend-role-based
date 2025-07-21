"use client"
import { GetTodos } from "@/api/Routes"
import React, { useEffect, useState } from "react"

const todo = [
	{
		id: 1,
		completed: true,
		text: "1234",
	},
	{
		id: 2,
		completed: false,
		text: "1234",
	},
	{
		id: 3,
		completed: false,
		text: "1234",
	},
]

const TodoList = () => {
	//const [todos, setTodos] = useState([])
	const [newTodo, setNewTodo] = useState("")

	useEffect(() => {
		const task = async () => {
			await GetTodos()
		}
		task()
		console.log(task())
	}, [])

	const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const toggleComplete = () => {}

	const deleteTodo = () => {}

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
			<h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
				My To-Do List
			</h1>

			<form onSubmit={addTodo} className="flex mb-4">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Add a new task..."
					className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					type="submit"
					className="bg-blue-600 text-white px-5 py-3 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
					Add
				</button>
			</form>

			{todo.length === 0 ? (
				<p className="text-center text-gray-500">No tasks yet. Add some!</p>
			) : (
				<ul>
					{todo.map((todos) => (
						<li
							key={todos.id}
							className="flex items-center justify-between bg-gray-50 p-3 mb-2 rounded-md shadow-sm">
							<span
								className={`flex-grow text-lg ${
									todos.completed
										? "line-through text-gray-400"
										: "text-gray-800"
								}`}>
								{todos.text}
							</span>
							<div className="flex items-center space-x-2">
								<input
									type="checkbox"
									checked={todos.completed}
									onChange={() => toggleComplete()}
									className="form-checkbox h-5 w-5 text-blue-600 rounded"
								/>
								<button
									onClick={() => deleteTodo()}
									className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default TodoList

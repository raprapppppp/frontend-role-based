import React from "react"
import TodoList from "./todo-list"
import { CircleUser } from "lucide-react"

const Todo = async () => {
	return (
		<div>
			<div>
				<h1>CARD MRI</h1>
				<div>
					<CircleUser />
					<p></p>
				</div>
			</div>
			<TodoList />
		</div>
	)
}

export default Todo

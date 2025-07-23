import { CreateTask, GetProfile, GetTodos } from "@/api/Routes"
import { create } from "zustand"

type Profile = {
	ID: number
	Firstname: string
	Lastname: string
	Username: string
	Role: string
}

type Task = {
	ID: number
	Task: string
	Completed: boolean
}

interface TodoState {
	profile: Profile[]
	setProfile: () => Promise<void>
}

interface TodoList {
	tasks: {
		ID: number
		Task: string
		Completed: boolean
	}[]
	setTasks: () => Promise<void>
	addTasks: (newTask: Task) => Promise<void>
}

export const useTodoProfile = create<TodoState>()((set) => ({
	profile: [],
	setProfile: async () => {
		const userProfile = await GetProfile()
		set({ profile: userProfile })
	},
}))

export const useTodoList = create<TodoList>()((set) => ({
	tasks: [],
	setTasks: async () => {
		const getTask = await GetTodos()
		set({ tasks: getTask })
	},
	addTasks: async (newTask) => {
		const response = await CreateTask(newTask)
		set((state) => ({
			tasks: [...state.tasks, response],
		}))
		console.log(response)
	},
}))

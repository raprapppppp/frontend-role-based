import React from "react"
import { User, Lock, UserPlus, LogIn, LucideIcon } from "lucide-react"
// Define types for Input component props

interface InputProps {
	type?: string
	placeholder?: string
	name: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	icon?: LucideIcon // Use LucideIcon type for the icon prop
	className?: string
}
const Input: React.FC<InputProps> = ({
	type = "text",
	name,
	placeholder,
	value,
	onChange,
	icon: Icon,
	className = "",
}) => {
	return (
		<div className={`relative flex items-center ${className}`}>
			{Icon && <Icon className="absolute left-3 text-gray-400" size={20} />}
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
			/>
		</div>
	)
}

export default Input

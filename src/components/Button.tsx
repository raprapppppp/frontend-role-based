import React from "react"

// Define types for Button component props
interface ButtonProps {
	children: React.ReactNode
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	className?: string
	type?: "button" | "submit" | "reset" // Added type for button
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	className = "",
	type = "button",
}) => {
	return (
		<button
			type={type} // Set button type
			onClick={onClick}
			className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 ${className}`}>
			{children}
		</button>
	)
}

export default Button

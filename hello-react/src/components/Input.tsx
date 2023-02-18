import { ChangeEventHandler } from "react"

interface InputProps {
    placeholder: string,
    handleChange: ChangeEventHandler<HTMLInputElement>,
    name: string,
    value: string
}
export default function Input({placeholder, handleChange, name, value }: InputProps) {
    return (
        <input
            value={value}
            name={name}
            className="input"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}
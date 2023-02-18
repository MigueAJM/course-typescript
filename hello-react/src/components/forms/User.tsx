import { ChangeEventHandler, MouseEventHandler } from "react"
import Button from "../Button"
import Input from "../Input"

export default function UserForm() {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log("Hello world")
    }
    return (
        <>
            <Input placeholder='Nombre' handleChange={handleChange} />
            <Input placeholder='Apellido' handleChange={handleChange} />
            <Button handleClick={handleClick}>Primary</Button>
        </>
    )
}
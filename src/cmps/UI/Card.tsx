import { FC } from "react"

interface CardProps {
    children:React.ReactNode
    className?:string
}

const Card:FC<CardProps> = ({children, className}) => {
    return <div  className={`bg-card flex flex-col justify-start p-8 rounded-2xl w-full transition mx-auto min-h-[300px] hover:border-4c4c9f hover:bg-body hover:border hover:border-solid ${className}`}>{children}</div>
}

export default Card



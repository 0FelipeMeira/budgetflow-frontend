import React from "react";


interface InputProps {
    label: string;
    placeholder?: string;
    
}
const Input = ({ label, placeholder }: InputProps) => {
    return (
        <>
            <label className="font-bold">{label}</label>
            <input type="text" className="border-4 border-blue-400"></input>
        </>
    )
}

export default Input


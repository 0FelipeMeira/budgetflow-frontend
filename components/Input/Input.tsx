import React from "react";


interface InputProps {
    label: string;
    placeholder?: string;
    
}
const Input = ({ label, placeholder }: InputProps) => {
    return (
        <div className="flex flex-col">
            <label className="font-bold text-main-5">{label}</label>
            <input type="text" className="w-80 border-2 border-main-5 rounded-3xl"></input>
        </div>
    )
}

export default Input


import React from "react";
import Input from "../Input/Input";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import Title from "../Title/Title";
import Link from "next/link";


function RegisterCard() {
    return (
        <div className="bg-slate-200 relative flex flex-col justify-center items-center gap-2 mt-20 w-96 h-2/5">
            <Title text="Register"></Title>
            <Input label="Name"/>
            <Input label="Username"/>
            <Input label="Password"/>
            <ButtonLogin txt="Register"/>
            <Link href="/login" className="text-main-4 text-md font-semibold"> Sign up </Link>
            
        </div>
    )
}

export default RegisterCard
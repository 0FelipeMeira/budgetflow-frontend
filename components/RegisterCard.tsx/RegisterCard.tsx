import React from "react";
import Input from "../Input/Input";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import Title from "../Title/Title";
import Link from "next/link";
import Image from 'next/image';


function RegisterCard() {
    return (
            <div className="bg-white w-7/12 h-screen flex flex-col justify-center items-center gap-2  ">
                <Title text="Register"></Title>
                <Input label="Name" />
                <Input label="Username" />
                <Input label="Password" />
                <ButtonLogin txt="Register" />
                <Link href="/login" className="text-main-4 text-md font-semibold"> Sign In </Link>
            </div>
    )
}

export default RegisterCard
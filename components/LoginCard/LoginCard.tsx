import React from "react";
import Input from "../Input/Input";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import Title from "../Title/Title";
import Link from "next/link";
import Image from 'next/image';


function LoginCard() {
  return (
    <div className="bg-white w-7/12 h-screen flex flex-col justify-center items-center gap-2  ">
      <Title text="Login"></Title>
      <Input label="Username" />
      <Input label="Password" />
      <ButtonLogin txt="Sign In" />
      <Link href="/register" className="text-main-4 text-md font-semibold"> Sign Up </Link>
    </div>
  )
}

export default LoginCard
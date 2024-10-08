import React from 'react'
import Input from '@/components/Input/Input';
import Title from '@/components/Title/Title';
import ButtonLogin from '@/components/ButtonLogin/ButtonLogin';
import Link from 'next/link';


function LoginCard() {
  return (
    <div className="bg-slate-200 relative flex flex-col justify-center items-center gap-2 mt-20 w-96 h-2/5">
    <Title text="Sign In"></Title>
    <Input label="Username"/>
    <Input label="Password"/>
    <ButtonLogin txt="Sign In"/>
    <Link href="/login" className="text-main-4 text-md font-semibold"> Register </Link>
    
</div>
  )
}

export default LoginCard
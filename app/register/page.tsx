"use client";
import React from 'react'
import RegisterCard from '@/components/RegisterCard.tsx/RegisterCard';
import Image from 'next/image';


function Page_register() {
  return (
    <div className='bg-main-1 h-screen flex flex-row-reverse'>
      <img src="/images/imglogin.jpg" alt="imagem login" className="" />
      <RegisterCard/>
  

    </div>
  )
}

export default Page_register


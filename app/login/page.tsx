import React from 'react'
import LoginCard from '@/components/LoginCard/LoginCard';
import Image from 'next/image';


function Page_login() {
  return (
    <div className='bg-main-1 h-screen flex flex-row-reverse'>
      <img src="/images/imglogin.jpg" alt="imagem login" className="" />
      <LoginCard />
    </div>
  )
}

export default Page_login;

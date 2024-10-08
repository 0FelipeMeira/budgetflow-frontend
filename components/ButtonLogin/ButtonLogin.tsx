import React from 'react'


interface ButtonProps {
    txt: string;
    

    
}
const ButtonLogin = ({txt}: ButtonProps) => {
  return (
    <div className='bg-main-4 rounded-2xl h-8 w-36 text-white flex items-center justify-center font-semibold'>{txt}</div>
  )
}

export default ButtonLogin
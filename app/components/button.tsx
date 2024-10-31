import React from 'react'
import Link from 'next/link';

interface ButtonProps {
  title: string,
  target: string,
}

const Button = ({ title, target }: ButtonProps) => {
  return (
    <div className='flex justify-center p-5 m-5 border rounded-lg border-blue-400 w-[100px]'>
      <Link href={target}>{title}</Link>
    </div>
  )
}

export default Button
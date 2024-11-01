import React from 'react'
import Link from 'next/link';

interface ButtonProps {
  title: string,
  target: string,
}

const Button = ({ title, target }: ButtonProps) => {
  return (
    <Link href={target}>
      <div className='flex justify-center p-5 m-5 border rounded-lg border-slate-400 w-[100px]'>
        {title}
      </div>
    </Link>
  )
}

export default Button
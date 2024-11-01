import React from 'react'
import Link from 'next/link';

interface ButtonProps {
  title: string,
  target: string,
}

const Button = ({ title, target }: ButtonProps) => {
  return (
    <Link href={target}>
      <div className='rounded text-white bg-slate-600 m-4 p-4 flex justify-center' style={{ background: 'rgb(238, 138, 128)' }}>
        {title}
      </div>
    </Link>
  )
}

export default Button
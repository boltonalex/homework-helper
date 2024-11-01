import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <Link href='/'>
      <div className='p-4 border-b-2' style={{ background: 'rgb(170, 186, 172)' }}>Homework Helper</div>
    </Link>

  )
}

export default Header
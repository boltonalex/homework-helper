import Link from 'next/link'
import Image from 'next/image'
function Header() {
  return (
    <Link href='/' className='flex border-b-2 w-full bg-customTeal items-center'>
      <Image src='/logo.png' className='rounded-full m-2' alt='Homework Helper' width={59} height={60} />
      <div className='p-4'>Homework Helper</div>
    </Link>

  )
}

export default Header
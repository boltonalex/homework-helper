import React from 'react'
import Button from '@/app/components/button';

const years = [
  { name: 'Year 1', target: '/1' },
  { name: 'Year 2', target: '/2' },
  { name: 'Year 3', target: '/3' },
  { name: 'Year 4', target: '/4' },
  { name: 'Year 5', target: '/5' },
  { name: 'Year 6', target: '/6' }
]
const YearSelect = () => {
  return (
    <>
      <div className='bg-blue-600 p-4 text-white'>Homework Helper</div>
      <p className='p-4'>Choose a school year:</p>
      <div className='grid grid-cols-3'>
        {years.map((year, index) => (
          <Button key={`${index}_${year}`} title={year.name} target={`yearSelect/${year.target}`} />
        ))}
      </div>
    </>

  )
}

export default YearSelect
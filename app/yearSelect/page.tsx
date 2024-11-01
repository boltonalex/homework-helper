import React from 'react'
import Button from '@/app/components/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb';
import Header from '../components/header';

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
    <div style={{ background: 'rgb(220, 208, 183)', color: 'rgb(86, 77, 62)' }} className='h-screen'>
      <Header />
      <Breadcrumb className='p-4' style={{ background: 'rgb(170, 186, 172)' }}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className='text-white'>Year Select</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className='p-4'>Choose a school year:</p>
      <div className='grid grid-cols-3'>
        {years.map((year, index) => (
          <Button key={`${index}_${year}`} title={year.name} target={`yearSelect/${year.target}`} />
        ))}
      </div>
    </div>

  )
}

export default YearSelect
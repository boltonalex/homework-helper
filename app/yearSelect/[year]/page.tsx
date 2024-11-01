'use client';
import React from 'react'
import Button from '@/app/components/button';
import { useParams } from 'next/navigation'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Header from '@/app/components/header';

const yearOneSubjects = [
  { name: 'Mathematics', target: '/mathematics' },
  { name: 'Science', target: '/science' },
  { name: 'English', target: '/english' },
]

const Year = () => {
  const { year } = useParams<{ year: string }>()
  return (
    <div style={{ background: 'rgb(220, 208, 183)', color: 'rgb(86, 77, 62)' }} className='h-screen'>
      <Header />
      <Breadcrumb className='p-4' style={{ background: 'rgb(170, 186, 172)' }}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className='text-white' href="/yearSelect">Year {year}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className='text-white' />
          <BreadcrumbItem>
            <BreadcrumbLink className='text-white'>Subjects</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className='p-4'>Choose a subject:</p>

      <div className='grid grid-cols-3'>
        {yearOneSubjects.map((subject, index) => (
          <Button key={`${index}_${subject}`} title={subject.name} target={`${year}/${subject.target}`} />
        ))}
      </div>

    </div>

  )
}

export default Year;
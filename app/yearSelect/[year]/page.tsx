'use client';
import React from 'react'
import Button from '@/app/components/button';
import { useParams } from 'next/navigation'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const yearOneSubjects = [
  { name: 'Mathematics', target: '/mathematics' },
  { name: 'Science', target: '/science' },
  { name: 'English', target: '/english' },
]

const Year = () => {
  const { year } = useParams<{ year: string }>()
  return (
    <>
      <div className='bg-blue-600 p-4 text-white border-b-2 border-white'>Homework Helper</div>
      <Breadcrumb className='bg-blue-600 py-4 px-2'>
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
      <div className='grid grid-cols-3'>
        {yearOneSubjects.map((subject, index) => (
          <Button key={`${index}_${subject}`} title={subject.name} target={`${year}/${subject.target}`} />
        ))}
      </div>

    </>

  )
}

export default Year;
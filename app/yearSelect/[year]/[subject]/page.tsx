'use client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { TitleCase } from '@/app/utils/TitleCase';
import { getContent } from '@/lib/actions/homework.actions';
import { EducationalContent } from '@/app/types/EducationalContentTypes';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Header from '@/app/components/header';
import Loader from '@/app/components/loader';

const Subject = () => {
  const { year, subject } = useParams<{ year: string, subject: string }>()
  const [topic, setTopic] = useState<number>(0);
  const [data, setData] = useState<EducationalContent[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const content = await getContent(year, subject);
        console.log({ content })
        const data = await content;
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subject, year]);

  const handleSetTopic = (topicNumber: number) => {
    setTopic(topicNumber);
  }

  const TopicExplanation = () => {
    const methodText = data.filter((item) => item.topic_title === data[topic].topic_title)[0].method_explanation;
    return (
      <div className='max-w-5xl'>
        <p className='font-bold text-xl my-4'>Teaching Method:</p>
        <p>
          {methodText}
        </p>
      </div>
    )
  };
  // const TopicImage = ({ explanation }: { explanation: string }) => {
  //   return (
  //     <div className='max-w-5xl pb-4'>{explanation}</div>
  //   )
  // };

  const TopicActivities = () => {
    return (
      <div>
        <p className='font-bold text-xl my-4'>Activities:</p>
        <ol className='max-w-5xl list-decimal list-inside'>
          {data.filter((item) => item.topic_title === data[topic].topic_title)[0].interactive_activities.map((activity, index) => (
            <li key={`${activity}_${index}`} className='my-4'>
              {activity}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (loading) return <Loader />
  if (data.length === 0) return <div>No data found</div>
  return (
    <div className='h-full md:h-screen bg-primaryBtnBG text-customBark'>
      <Header />
      <Breadcrumb className='p-4' style={{ background: 'rgb(170, 186, 172)' }}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className='text-white' href={`/yearSelect`}>Year {year}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className='text-white' />
          <BreadcrumbItem>
            <BreadcrumbLink className='text-white' href={`/yearSelect/${year}`}>{TitleCase(subject)}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ul className='bg-customTeal p-2'>
        {data?.map((datum, index) => (
          <li key={index} onClick={() => handleSetTopic(index)} className={`cursor-pointer my-2 pl-5 pt-2 pb-2 rounded-3xl ${topic === index ? 'text-white bg-customSandRed' : 'text-white bg-customSandRedAccent'}`}>{datum.topic_title}</li>
        ))}

      </ul>
      <div className='m-4 mb-0 pb-16'>
        <TopicExplanation />
        <TopicActivities />
      </div>

    </div >
  )
}

export default Subject
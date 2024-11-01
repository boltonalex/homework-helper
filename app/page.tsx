import Link from "next/link";
import Image from "next/image";
// import styles from './Home.module.css'; // Import the CSS module
import HomeListItem from "./components/homeListItem";

export default function Home() {
  return (
    <div className='flex w-full md:justify-center' style={{ background: 'rgb(220, 208, 183)' }}>
      <div className="flex flex-col max-w-screen-lg items-center min-h-screen p-4">
        <div className="heroImage flex text-black w-full h-[400px] md:h-[600px] justify-center md:text-4xl pt-[310px] md:pt-[500px]">
          <h1 className="text-2xl md:text-5xl font-extrabold md:h-[1em]">
            Welcome to the Homework Helper!
          </h1>
        </div>
        <p className='pb-4'>
          Our website is a learning aid for parents supporting their child&lsquo;s primary education (Years 1-6) based on the UK National Curriculum. Here, you&lsquo;ll find clear explanations of key topics in Mathematics, English, and Science, organized by year and key stage, with guided methods, interactive activities, and soon we&lsquo;ll have visuals to make learning engaging and effective.
        </p>

        <Link href="/yearSelect" className='rounded text-white bg-slate-600 m-4 p-4' style={{ background: 'rgb(238, 138, 128)' }}>Get Started!</Link>

        <div className='flex my-4 flex-col md:flex-row'>
          <div className='flex content-center justify-center flex-col'>
            <h2 className='text-xl font-bold'>
              Who is the Website For?
            </h2>
            <p className='py-4'>
              This website is for parents and guardians looking to enhance their child&lsquo;s learning at home—without needing to sift through lengthy curriculum documents. Whether you&lsquo;re helping with a tricky Maths problem, working on English reading comprehension, or exploring Science concepts, our resources offer quick, clear guidance to support and motivate your child&lsquo;s learning journey.
            </p>
          </div>
          <Image src="/family.webp" alt="Parents helping child with homework" className='rounded-3xl' width={400} height={300} />
        </div>

        <h2 className='text-xl font-bold mt-4 w-full'>
          How to use this resource
        </h2>
        <p className='py-4 text-left w-full'>
          Our user-friendly interface is designed with ease and functionality in mind. Here&lsquo;s a step-by-step guide to exploring the resources:
        </p>
        <ol className='rounded-xl my-4' style={{ background: 'rgb(170, 186, 172)', color: 'rgb(86, 77, 62)' }}>
          <HomeListItem count={1} title='Select the Year Group' description='Start by choosing the year your child is currently in (Year 1 - Year 6).' />
          <HomeListItem count={2} title='Choose the Subject' description='Navigate through Mathematics, English, or Science, based on your focus.' />
          <HomeListItem count={3} title='Pick a Topic' description='Topics are divided according to the national curriculum for each year. Select a topic to view tailored explanations, activities, and soon we&lsquo;ll add visual aids.' />
          <HomeListItem count={4} title='Explore Interactive Activities' description='Each topic provides suggested activities that you can do together to strengthen understanding and engagement.' />
          <HomeListItem count={5} title='(Coming Soon) Access Visual Guides' description='Each topic includes a custom visual that illustrates key methods in a child-friendly, minimalist style. These visuals are perfect for reinforcing concepts in an easy-to-understand format.' />

        </ol>


        <div className='flex my-4 flex-col md:flex-row'>
          <Image src="/mother-son.webp" alt="Parents helping child with homework" className='rounded-3xl md:mr-8 mb-8 md:mb-0' width={400} height={300} />
          <div className='flex content-center justify-center flex-col'>
            <h2 className='text-xl font-bold'>
              Why we made this Website
            </h2>
            <p className='py-4'>
              As parents ourselves, we understand how challenging it can be to make home learning both effective and enjoyable. We created this website to save parents time by translating classroom methods from the curriculum into quick, easy-to-understand guides.
            </p>
            <p className='py-4'>
              With these resources, you can dive right into helping with Maths, English, and Science, making learning at home less about deciphering school jargon and more about engaging activities that keep your child motivated and having fun.
            </p>
          </div>
        </div>

        <h2 className='text-xl font-bold'>
        </h2>
        <Link className='rounded text-white bg-slate-600 m-4 p-4' style={{ background: 'rgb(238, 138, 128)' }} href="/yearSelect">Get Started!</Link>
      </div>
    </div>
  );
}

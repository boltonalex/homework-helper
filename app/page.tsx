import Link from "next/link";

export default function Home() {
  return (
    <div className='flex w-full md:justify-center'>
      <div className="flex flex-col max-w-screen-lg items-center min-h-screen bg-gray-100 p-4">
        <h1 className='flex text-2xl bg-slate-600 p-4 text-white w-full justify-center md:text-4xl md:pt-40 md:pb-20 '>
          Welcome to the Homework Helper!
        </h1>
        <p className='p-4'>
          Our website is a learning aid for parents supporting their child&lsquo;s primary education (Years 1-6) based on the UK National Curriculum. Here, you&lsquo;ll find clear explanations of key topics in Mathematics, English, and Science, organized by year and key stage, with guided methods, interactive activities, and soon we&lsquo;ll have visuals to make learning engaging and effective.
        </p>
        <Link className="border-2 rounded border-blue-700 text-white bg-slate-600 m-4 p-2" href="/yearSelect">Choose a class</Link>
        <h2 className='text-xl'>
          Who is the Website For?
        </h2>
        <p className='p-4'>
          This website is for parents and guardians looking to enhance their child&lsquo;s learning at home—without needing to sift through lengthy curriculum documents. Whether you&lsquo;re helping with a tricky Maths problem, working on English reading comprehension, or exploring Science concepts, our resources offer quick, clear guidance to support and motivate your child&lsquo;s learning journey.
        </p>

        <h2 className='text-xl'>
          How to Use the Website
        </h2>
        <p className='p-4'>
          Our user-friendly interface is designed with ease and functionality in mind. Here&lsquo;s a step-by-step guide to exploring the resources:
        </p>
        <ol className='list-decimal list-inside bg-slate-300 rounded-xl m-4'>
          <li className='my-2 p-4'>
            Select the Year Group: Start by choosing the year your child is currently in (Year 1 - Year 6).
          </li>
          <li className='my-2 p-4'>
            Choose the Subject: Navigate through Mathematics, English, or Science, based on your focus.
          </li>
          <li className='my-2 p-4'>
            Pick a Topic: Topics are divided according to the national curriculum for each year. Select a topic to view tailored explanations, activities, and soon we&lsquo;ll add visual aids.
          </li>
          <li className='my-2 p-4'>
            Explore Interactive Activities: Each topic provides suggested activities that you can do together to strengthen understanding and engagement.
          </li>
          <li className='my-2 p-4'>
            (Coming Soon) Access Visual Aids: Each topic includes a custom visual that illustrates key methods in a child-friendly, minimalist style. These visuals are perfect for reinforcing concepts in an easy-to-understand format.
          </li>
        </ol>
        <h2 className='text-xl'>
          Why Parents Love Our Website
        </h2>
        <p className='p-4'>
          As parents ourselves, we understand how challenging it can be to make home learning both effective and enjoyable. We created this website to save parents time by translating classroom methods from the curriculum into quick, easy-to-understand guides.
        </p>
        <p className='p-4'>
          With these resources, you can dive right into helping with Maths, English, and Science, making learning at home less about deciphering school jargon and more about engaging activities that keep your child motivated and having fun.
        </p>
        <Link className="border-2 rounded border-blue-700 text-white bg-slate-600 m-4 p-2" href="/yearSelect">Choose a class</Link>
      </div>
    </div>
  );
}

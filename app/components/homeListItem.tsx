interface HomeListItemProps {
  count: number;
  title: string;
  description: string;
}

function HomeListItem({ count, title, description }: HomeListItemProps) {
  return (
    <li className='my-2 p-4 flex content-center flex-col md:flex-row md:items-center'>
      <span className="md:flex items-center justify-center w-16 h-16 text-white font-bold rounded-full mr-3 hidden bg-customBark">
        {count}
      </span>

      <div className='flex flex-col md:items-center md:justify-center md:flex-row'>
        <span className='flex font-bold md:w-[200px] text-wrap'>{title}</span>
        <span className='flex md:max-w-96'>{description}</span>
      </div>

    </li>
  )
}

export default HomeListItem
import Image from 'next/image';

export const TopicOneData = () => {
    return (
        <div className='max-w-5xl '>
            <div className='my-8 rounded-3xl bg-slate-300 p-4'>
                Focus on using <span className='font-bold'>visual aids</span> and <span className='font-bold'>hands-on activities</span> to build a child&lsquo;s understanding of number order and patterns.
            </div>
            <p className='font-bold underline-offset-4 underline mb-1'>
                Number Line:
            </p>
            <Image src='/number-line.png' alt='Number and Place Value' width={800} height={400} />
            <p className='mb-4 border-b-2 pb-4'>
                Use a number line from 0 to 20 and beyond. Encourage your child to point and count forwards, then practice counting backwards to understand sequencing.
            </p>
            <p className='font-bold underline-offset-4 underline mb-4'>
                Counting Objects:
            </p>
            <Image src='/counting-beans.png' alt='counting beans' width={800} height={400} />
            <p className='mb-4 border-b-2 pb-4'>
                Place 20 small objects (like blocks or counters) in a row. Have your child count each item, moving forwards and then backwards to reinforce order.
            </p>
            <p className='font-bold underline-offset-4 underline mb-4'>
                Finger Counting:
            </p>
            <Image src='/kid-counting-hands.jpg' alt='kid counting hands' width={800} height={400} />
            <p className='mb-4 border-b-2 pb-4'>
                Start by counting on fingers to 10, then extend to 20 using both hands or feet, helping them visualize numbers growing and shrinking as they count forwards or backwards.
            </p>
            <p className='font-bold underline-offset-4 underline mb-4'>
                Count and Move:
            </p>
            <p className='mb-4 border-b-2 pb-4'>
                Use movement to reinforce counting. For example, take steps forwards and backwards as they count, helping connect numbers with spatial direction.
            </p>
            <p className='font-bold underline-offset-4 underline mb-4'>
                Games and Songs:
            </p>
            <p className='mb-4 border-b-2 pb-4'>
                Use number rhymes or songs that count up and down, such as &quot;1, 2, 3, 4, 5, Once I caught a fish alive…&quot; or &quot;10 green bottles,&quot; to make learning fun and memorable.
            </p>
        </div >
    )
}
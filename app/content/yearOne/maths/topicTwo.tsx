// import Image from 'next/image';

export const TopicTwoData = () => {
    return (
        <div className='max-w-5xl '>
            <div className='my-8 rounded-3xl bg-slate-300 p-4'>
                Focus on using <span className='font-bold'>visual aids</span> and <span className='font-bold'>hands-on activities</span> to build a child&lsquo;s understanding of number order and patterns.
            </div>
            <p>
                Teaching Technique:
            </p>
            <p className='font-bold underline-offset-4 underline mb-1'>
                Use of Objects:
            </p>

            {/* <Image src='/number-line.png' alt='Number and Place Value' width={800} height={400} /> */}
            <p className='mb-4 border-b-2 pb-4'>
                Start with concrete objects like counters, buttons, or blocks. Physically adding or removing items helps children visualize addition and subtraction.
                Number Line Jumps: Draw a number line and have your child &quot;jump&quot; forward for addition and backward for subtraction. This helps them understand the direction of each operation.
                Counting Up and Down: Teach them to count up from a number to add and count down to subtract. This reinforces mental math skills.
            </p>

        </div >
    )
}
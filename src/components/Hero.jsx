import React from 'react'

function Hero() {
  return (
    <div className='w-full flex justify-center items-center bg-black py-16 md:mt-[60px]'>
        <h1 className=' text-4xl px-10 md:text-5xl font-black md:my-36 my-16 '>
            My name is&nbsp;
            <br className='md:hidden' />
            Marco Silva &
            <br/>
            I'm a <span className='text-yellow-500'>Front End Developer</span>
            <br/>
            based in&nbsp;
            <br className='md:hidden' />
            Los Angeles.
        </h1>
    </div>
  )
}

export default Hero
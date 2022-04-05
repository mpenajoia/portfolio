import React from 'react'

function Hero() {
  return (
    <div className='w-full flex justify-center items-center bg-black py-16 md:mt-[60px]'>
        <h1 className=' text-3xl px-10 md:text-5xl font-black md:my-36 my-16 text-center md:text-left'>
            My name is Marco Silva &
            <br/>
            I'm a <span className='text-yellow-500'>Front End Developer</span>
            <br/>
            based in Los Angeles.
        </h1>
    </div>
  )
}

export default Hero
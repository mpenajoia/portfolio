import React from 'react'

function Hero() {
  return (
    <div className='w-full flex justify-center bg-zinc-300 py-4'>
        <h1 className='text-5xl font-black'>
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
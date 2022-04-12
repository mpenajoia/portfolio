import React, { useContext } from 'react';
import { ObjectContext } from '../context/ObjectContext';
import { Cryptofomo, ResumeBuilder, Netfolio } from '../img/index';

function Hero() {
  const projectImagesList = [Netfolio, Cryptofomo, ResumeBuilder]
  const { info } = useContext(ObjectContext);
  const projects = info.projects
  const heroProjects = projects.map((item, key) => {
    const heroThumb = projectImagesList.filter(proj => {
      return proj.includes(item.image.toLowerCase())
    })
    return(
      <div key={key} className='w-[300px] rounded-lg flex flex-col text-center'>
        <img alt={item.title} src={heroThumb} />
            <p className='bg-zinc-800 py-5 rounded-b-lg font-bold text-yellow-500'>{item.title}</p>
      </div>
    )
  })

  return (
    <div className='w-5/6 flex justify-center items-center bg-black py-16 md:mt-[60px] relative overflow-hidden'>
        <h1 className='ml-5 text-4xl md:text-5xl font-black md:my-36 my-16 relative z-10 drop-shadow-lg'>
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
        <div className='hidden absolute lg:flex lg:opacity-60 xl:opacity-100 gap-4 right-0 pointer-events-none skew'>
          {heroProjects}
        </div>
    </div>
  )
}

export default Hero
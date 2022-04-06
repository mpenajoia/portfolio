import React, { useContext } from 'react';
import { ObjectContext } from '../context/ObjectContext';
import { Cryptofomo, ResumeBuilder, Netfolio } from '../img/index';
import { Icon } from 'react-icons-kit'
import * as icons from 'react-icons-kit/icomoon'


function ProjectCard(project, key) {
  const projectImagesList = [Netfolio, Cryptofomo, ResumeBuilder]
  const projectImage = projectImagesList.filter((img) => {
    return img.includes(project.image.toLowerCase()) 
  })
  const techStack = project.tech.map((tech, key) => {
    return (
      <p key={key}>{tech}</p>
    )
  })
  return (
    <div key={key} style={{ backgroundImage: `url(${[projectImage[0]]})`}} className='w-full lg:w-1/3 bg-cover bg-top lg:bg-center rounded-md flex flex-wrap hover:scale-105 ease-in-out duration-300'>
      <div className='flex flex-col justify-center items-center w-full h-96 duration-300 hover:bg-gradient-to-t from-black/[.85] to-black/[.35] md:overflow-hidden group'>
          <div className='opacity-0 group-hover:opacity-100 duration-500 ease-in-out flex flex-col justify-center items-center gap-6 md:mb-0 mb-6'>
            <a href={project.link} target="_blank" rel="noreferrer" >        
              <h4 className='text-4xl text-center font-bold duration-300 ease-in-out md:hover:text-yellow-500 drop-shadow'>{project.title}</h4>
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" >              
              <Icon icon={icons.github} size={32} className='duration-300 ease-in-out hover:text-yellow-500 drop-shadow'/>
            </a>
          </div>         
          <div className='flex flex-col items-center md:translate-y-96 md:group-hover:translate-y-16 opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>            
            <div className='flex flex-wrap justify-evenly items-end text-yellow-500 font-bold w-3/4 text-center'>
              {techStack}
            </div>
            <p className='my-2 px-6 text-white text-lg md:text-base leading-2 md:leading-none'>{project.desc}</p>
          </div>
      </div>
    </div>
  )
}

function Projects() {
  const { info } = useContext(ObjectContext);
  const projects = info.projects
  const projectMap = projects.map((project, key) => {
    return (
      ProjectCard(project, key)
    )
  })
  return (
    <div className='flex flex-col w-full justify-center items-center my-10 md:py-16 pt-10 md:target:pt-[100px]' id="projects">
      <h2 className='text-5xl md:text-6xl mb-10 font-bold'>Projects</h2>
      <div className='flex lg:flex-row flex-col w-5/6 xl:w-4/5 justify-between items-center gap-6 h-420px'>
        {projectMap}
      </div>
    </div>
  )
}

export default Projects
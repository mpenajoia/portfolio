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
    <div key={key} style={{ backgroundImage: `url(${[projectImage[0]]})`}} className='w-1/3 bg-cover bg-center rounded-md flex flex-wrap hover:scale-105 ease-in-out duration-300'>

      <div className='flex flex-col justify-center items-center w-full pt-10 pb-40 hover:bg-gradient-to-t from-black/[.85] to-black/[.25] overflow-hidden group'>
          <a href={project.link} target="_blank" rel="noreferrer" >
            <h4 className='text-4xl font-bold -translate-y-80 group-hover:translate-y-12 duration-300 ease-in-out hover:text-yellow-500 '>{project.title}</h4>
          </a>
          <div className='flex flex-col items-center translate-y-96 group-hover:translate-y-32 duration-300 ease-in-out'>
            <div className='flex flex-wrap justify-evenly items-end text-yellow-500 font-bold w-3/4 text-center'>
              {techStack}
            </div>
            <p className='my-2 px-6 text-white'>{project.desc}</p>
            <a href={project.github} target="_blank" rel="noreferrer" >
              <Icon icon={icons.github} size={32} className='duration-300 ease-in-out hover:text-yellow-500'/>
            </a>
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
    <div className='flex flex-col w-full justify-center items-center my-10 py-16  target:pt-[100px]' id="projects">
      <h2 className='text-6xl mb-10 font-bold'>Projects</h2>
      <div className='flex w-3/5 justify-between gap-6 '>
        {projectMap}
      </div>
    </div>
  )
}

export default Projects
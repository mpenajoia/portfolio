import React, { useContext } from 'react';
import { ObjectContext } from '../context/ObjectContext';
import { Cryptofomo, ResumeBuilder } from '../img/index';
import Netfolio from '../img/netfolio.jpg';

function ProjectCard(project, key) {
  const projectImagesList = [Netfolio, Cryptofomo, ResumeBuilder]
  const projectImage = projectImagesList.filter((img) => {
    console.log(img)
    return img.includes(project.image.toLowerCase()) 
  })
  console.log(projectImage)
  return (
    <div key={key} style={{ backgroundImage: `url(${[projectImage[0]]})`}} className='w-1/3 bg-cover bg-center rounded-md flex flex-wrap hover:scale-105 ease-in-out duration-300'>

      <div className='flex flex-col justify-center items-center w-full py-60  text-white hover:text-yellow-500  hover:bg-gradient-to-t from-black/[.8] to-black/[.2] overflow-hidden group'>
          <h4 className='text-3xl font-bold -translate-y-80 group-hover:translate-y-0 duration-300 ease-in-out'>{project.title}</h4>
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
      <div className='flex w-3/4 justify-between gap-6 '>
        {projectMap}
      </div>
    </div>
  )
}

export default Projects
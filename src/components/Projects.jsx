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
    <div key={key} style={{ backgroundImage: `url(${[projectImage[0]]})`}} className='w-1/3 bg-cover bg-center p-10 bg-gradient-to-t from-yellow-500 to-yellow-400 hover:to-yellow-500 rounded-md flex flex-wrap text-black translate-y-0 hover:-translate-y-4 ease-in-out duration-500'>
      <p>{project.title}</p>
      <p>{project.link}</p>
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
    <div className='flex w-full justify-center my-10'>
      <div className='flex w-3/4 justify-between gap-6 '>
        {projectMap}
      </div>
    </div>
  )
}

export default Projects
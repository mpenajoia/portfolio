import React, { useContext } from 'react';
import { ObjectContext } from '../context/ObjectContext';



function ProjectCard(project, key) {
  console.log(project.image)
  return (
    <div key={key} className='w-1/4 p-3 bg-gradient-to-t from-yellow-500 to-yellow-400 hover:to-yellow-500 rounded-md flex flex-wrap text-black translate-y-0 hover:-translate-y-4 ease-in-out duration-500'>
      <p>{project.title}</p>
      <p>{project.link}</p>
      <img src={project.image} alt={project.title} />
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
      <div className='flex w-3/4 justify-between '>
        {projectMap}
      </div>
    </div>
  )
}

export default Projects
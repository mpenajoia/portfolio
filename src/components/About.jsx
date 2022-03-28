import React, { useContext } from 'react';
import { ObjectContext  } from '../context/ObjectContext';
import AboutDetail from './AboutDetail';

function About() {
    const { info } = useContext(ObjectContext);
    const about = info.about;
    console.log(about)
    const aboutNavMap = about.skills.map((skill, key) => {
        return (
            <li key={key}>
                <button>{skill.title}</button>
            </li>
        )
    })
  return (
    <div className='w-full flex justify-center bg-zinc-800 py-4'>
        <div className='flex flex-col'>
            <h2>About</h2>
            <p>{about.description}</p>
            <ul className='flex'>
                {aboutNavMap}
            </ul>
            <div>
                map through these
                <AboutDetail />
            </div>
        </div>
    </div>
  )
}

export default About
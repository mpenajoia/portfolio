import React, { useContext, useState } from 'react';
import { ObjectContext  } from '../context/ObjectContext';
import AboutDetail from './AboutDetail';

function About() {
    const { info } = useContext(ObjectContext);
    const about = info.about;
    const defaultSkill = about.skills[0].title
    const [aboutDetails, setAboutDetails] = useState(defaultSkill);
    const aboutNavClick = (e) => {
        setAboutDetails(e.target.value)
    }

    const aboutNavMap = about.skills.map((skill, key) => {
        return (
            <li key={key}>
                <button value={skill.title} onClick={aboutNavClick}>{skill.title}</button>
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
                <AboutDetail aboutDetails={aboutDetails} />
            </div>
        </div>
    </div>
  )
}

export default About
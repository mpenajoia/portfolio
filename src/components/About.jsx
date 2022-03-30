import React, { useContext, useState } from 'react';
import { ObjectContext  } from '../context/ObjectContext';
import AboutCard from './AboutCard';
import Photo from '../img/inkMe.png'

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
                <button  className='text-lg focus:text-yellow-500 focus:border-b-2 focus:border-yellow-500 after:content-none' value={skill.title} onClick={aboutNavClick}>{skill.title}</button>
            </li>
        )
    })
  return (
    <div className='w-full flex justify-center bg-zinc-800 py-6 target:pt-[60px] ' id={'about'}>
        <div className='flex w-3/5 gap-5'>
            <div className='w-1/3 self-center'>
                <img src={Photo} alt="Me" />
            </div>
            <div className='w-2/3'>
                <h2 className='text-4xl font-bold'>About Me</h2>
                <p className='my-2'>{about.description}</p>
                <ul className='flex justify-between'>
                    {aboutNavMap}
                </ul>
                <div>
                    <AboutCard aboutDetails={aboutDetails} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
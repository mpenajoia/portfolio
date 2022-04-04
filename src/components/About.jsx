import React, { useContext, useState } from 'react';
import { ObjectContext  } from '../context/ObjectContext';
import AboutCard from './AboutCard';
import Photo from '../img/inkMe.png'

function About() {
    const { info } = useContext(ObjectContext);
    const about = info.about;
    const defaultSkill = about.skills[0].title
    const [aboutDetails, setAboutDetails] = useState(defaultSkill);
    const [isActive, setIsActive] = useState('')
    const aboutNavClick = (e) => {
        setAboutDetails(e.target.value)
        if(e.target.children[0].className.includes('active'))
        console.log(e.target.children[0].className + ' active')
    }


    const aboutNavMap = about.skills.map((skill, key) => {
        return (
            <li key={key} className='group'>
                <button className='text-lg font-bold duration-300 ease-in-out focus:text-yellow-500 hover:text-yellow-500 ' value={skill.title} onClick={aboutNavClick}>{skill.title}
                <div className={`w-6 border-t group-hover:w-full group-hover:border-yellow-500 ${isActive}`}></div></button>
                
            </li>
        )
    })
    
  return (
    <div className='w-full flex justify-center bg-zinc-900 py-24 target:pt-[100px] ' id={'about'}>
        <div className='flex w-3/5 gap-5'>
            <div className='w-1/3 self-center'>
                <img src={Photo} alt="Me" />
            </div>
            <div className='w-2/3'>
                <h2 className='text-6xl font-bold'>About Me</h2>
                <p className='my-2 text-zinc-300'>{about.description}</p>
                <div className='flex w-4/5 mt-7 h-48 '>
                    <ul className='flex justify-start flex-col mr-6'>
                        {aboutNavMap}
                    </ul>
                    <AboutCard aboutDetails={aboutDetails} />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
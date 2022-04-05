import React, { useContext, useState } from 'react';
import { ObjectContext  } from '../context/ObjectContext';
import AboutCard from './AboutCard';
import Photo from '../img/inkMe.png';
import { Icon } from 'react-icons-kit';
import * as icons from 'react-icons-kit/icomoon';

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
            <li key={key} className='group' onClick={aboutNavClick} >
                <button className={`text-lg font-bold duration-300 ease-in-out focus:text-yellow-500 hover:text-yellow-500 ${(aboutDetails === skill.title) ? 'text-yellow-500' : 'text-white'}`} value={skill.title}>{skill.title}
                <div className={`border-t-2 duration-300 ease-in-out group-hover:w-full group-hover:border-yellow-500 ${(aboutDetails === skill.title) ? 'w-full border-yellow-500' : 'w-6'} `}></div></button>
            </li>
        )
    })
    
  return (
    <div className='w-full flex justify-center bg-zinc-900 py-24 target:pt-[100px] ' id={'about'}>
        <div className='flex w-1/2 gap-5'>
            <div className='w-1/3 self-center flex flex-col gap-5 items-center'>
                <img src={Photo} alt="Me" />
                <div className='flex justify-center items-center relative w-3/5 '>
                    <a href="https://penajoia.com/resume" className=' relative flex gap-2 justify-center bg-zinc-700 hover:bg-yellow-500 duration-300 ease-in-out rounded py-3 px-4 font-bold' target="_blank" rel="noreferrer">
                        <Icon icon={icons.fileText2} />
                        <span>Resume/CV</span>
                    </a>

                </div>
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
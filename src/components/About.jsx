import React, { useContext, useState } from 'react';
import { ObjectContext  } from '../context/ObjectContext';
import AboutCard from './AboutCard';
import MobileAboutCard from './MobileAboutCard';
import Photo from '../img/inkMe.png';
import { Icon } from 'react-icons-kit';
import * as icons from 'react-icons-kit/icomoon';

function About() {
    const { info } = useContext(ObjectContext);
    const about = info.about;
    const defaultSkill = about.skills[0].title
    const [aboutDetails, setAboutDetails] = useState(defaultSkill);
    const [mobileDetails, setMobileDetails] = useState();
    const aboutNavClick = (e) => {
        setAboutDetails(e.target.value)
        if(aboutDetails === mobileDetails){
            setMobileDetails()
        }else{
            setMobileDetails(e.target.value)
        }
    }

    const aboutNavMap = about.skills.map((skill, key) => {
        const aboutCardFilter = about.skills.filter((value) => {
            return value.title === skill.title
        })
        return (
            <li key={key} >
                <div className=' group w-full flex flex-col justify-center' onClick={aboutNavClick}>                    
                    <button className={`flex flex-col items-center md:items-start text-xl md:text-lg font-bold duration-300 ease-in-out md:focus:text-yellow-500 md:hover:text-yellow-500 ${(aboutDetails === skill.title) ? 'md:text-yellow-500' : 'text-white'} bg-black md:bg-transparent py-5 md:py-0 ${(mobileDetails === skill.title) ? 'focus:bg-yellow-500 focus:text-zinc-800' : ''} md:focus:bg-transparent`} value={skill.title}>{skill.title}
                        
                        <div className={` hidden md:block border-t-2 duration-300 ease-in-out group-hover:w-full group-hover:border-yellow-500 ${(aboutDetails === skill.title) ? 'w-full border-yellow-500' : 'w-0'}`}></div>
                    </button>
                </div>
                {(mobileDetails === skill.title) ?
                    <div className='md:hidden py-5 '>
                        <MobileAboutCard aboutCardFilter={aboutCardFilter} />
                    </div>
                : '' }
            </li>
        )
    })
    
  return (
    <div className='w-full flex justify-center bg-zinc-900 md:py-16 pt-10 md:target:pt-[100px] ' id={'about'}>
        <div className='flex flex-col w-full md:w-2/3 gap-5'>
            <h2 className='text-5xl md:text-6xl font-bold text-center mb-10'>About Me</h2>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className=' md:w-2/5 self-center flex flex-col gap-8 md:gap-5 items-center'>
                    <img src={Photo} alt="Me" />
                    <div className='flex justify-center items-center relative w-3/5 '>
                        <a href="https://penajoia.com/resume" className=' relative flex gap-2 justify-center bg-zinc-700 hover:bg-yellow-500 duration-300 ease-in-out rounded py-3 px-4 font-bold' target="_blank" rel="noreferrer">
                            <Icon icon={icons.fileText2} />
                            <span>Resume/CV</span>
                        </a>

                    </div>
                </div>
                <div className='w-full md:w-3/5'>
                    <p className='my-2 text-zinc-300 px-5 md:px-0'>{about.description}</p>
                    <div className='flex flex-col flex-wrap md:flex-row w-full mt-7 md:h40 '>
                        <ul className='flex justify-center md:justify-start flex-col mr-0 md:mr-6'>
                            {aboutNavMap}
                        </ul>
                        <div className='hidden md:flex h-full'>                            
                            <AboutCard aboutDetails={aboutDetails} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
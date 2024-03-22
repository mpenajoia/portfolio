import React, { useContext } from 'react';
import { ObjectContext  } from '../context/ObjectContext';

function AboutCard(props) {
    const { info } = useContext(ObjectContext);
    const skillsList = info.about.skills;
    const skillsFilter = skillsList.filter(value => {
        return value.title === props.aboutDetails
    })
    const skillsMap = skillsFilter[0].details.map((skill, key) => {
        return (
            <div className='md:mr-6 mb-2 text-center md:text-left' key={key}>
                <p className='text-zinc-300 font-black'>{skill.name}</p>
                <p className='text-yellow-500'>{skill.subname}</p>
                <p className='text-zinc-500'>{skill.location}</p>
            </div>
        )
    })
  return (
    <div className='flex flex-col md:justify-start justify-center'>
        {skillsMap}
    </div>
  )
}

export default AboutCard
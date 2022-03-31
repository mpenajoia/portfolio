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
            <div className='mr-6' key={key}>
                <p className='text-zinc-300 font-black'>{skill.name}</p>
                <p className='text-yellow-500'>{skill.subname}</p>
                <p className='text-zinc-500'>{skill.location}</p>
            </div>
        )
    })
  return (
    <div className='my-3 flex flex-wrap'>
        {skillsMap}
    </div>
  )
}

export default AboutCard
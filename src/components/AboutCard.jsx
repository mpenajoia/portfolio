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
            <div key={key}>
                <p><span>{skill.name}</span>{skill.subname ? ` - ${skill.subname}` : '' }</p>
                <p>{skill.desc}</p>
                <p>{skill.location}</p>
            
            </div>
        )
    })
  return (
    <div className='my-3'>
        {skillsMap}
    </div>
  )
}

export default AboutCard
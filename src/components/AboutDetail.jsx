import React, { useContext } from 'react';
import { ObjectContext  } from '../context/ObjectContext';

function AboutDetail(props) {
    const { info } = useContext(ObjectContext);
    const skillsList = info.about.skills;
    console.log("props ", props)
    const skillsFilter = skillsList.filter(value => {
        return value.title === props.aboutDetails
    })
    const skillsMap = skillsFilter[0].details.map((skill, key) => {
        return (
            <div key={key}>
                <p>{skill.name}{skill.subname ? ` - ${skill.subname}` : '' }</p>
                <p>{skill.desc}</p>
                <p>{skill.location}</p>
            
            </div>
        )
    })
  return (
    <div>
        {skillsMap}
    </div>
  )
}

export default AboutDetail
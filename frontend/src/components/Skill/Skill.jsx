import React from 'react'
import "./Skill.css"

const Skill = ({ tags }) => {
    
    return (
        <section id='skill' className="skill_container">
            <h1 className='skill_title'>SKILLS</h1>

            <div className="skills">
                {tags && Object.keys(tags).map(tag => (
                    <div className="skill_cont" key={`sk${tags[tag].name}`} >
                        <div className="skill hover:bg-slate-800" >
                            <img src={`${tags[tag].image}`} alt={`${tags[tag].name} icon`} />
                        </div>
                        <h2>{tags[tag].name}</h2>
                    </div>
                ))}
                
            </div>
        </section>
    )
}

export default Skill
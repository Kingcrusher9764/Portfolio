import React from 'react'

const ProjectCard = ({tags, id, name, desc, techs, link}) => {
    
  return (
    <div className="project" key={`p${id}`}>
        <h2 className='project_name' key={`t${id}`}>
            {name}
        </h2>

        <div className="desc" key={`d${id}`}>
            <h2 className='desc_title' key={`dt${id}`}>Desc: </h2>
            <p className="project_desc" key={`pd${id}`}>
                {desc}
            </p>
        </div>

        <div className="technology_used" key={`th${id}`}>
            <h3>Technologies used: </h3>
            <div className="tech">
                {techs.map(tech=>(<span key={`t${tech}`}>{tags[tech].name}</span>))}
            </div>
        </div>

        <div className="links" key={`l${id}`}>
            <a href={link} target='blank' className='link'><i className="ri-github-fill"></i> Github link</a>
        </div>
    </div>
  )
}

export default ProjectCard
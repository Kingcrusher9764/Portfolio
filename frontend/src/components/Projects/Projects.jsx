import React from 'react'
import "./Projects.css"
import ProjectCard from './ProjectCard'

const Projects = ({projects, tags}) => {

  return (
    <section id="project" className="project_container">
        <h2 className="project_title">
            PROJECTS
        </h2>

        <div className="projects">
            {projects && projects.map(project=>(
                <ProjectCard 
                key={`pc${project.id}`}
                tags={tags}
                id={project.id}
                name={project.title}
                desc={project.description}
                techs={project.tags}
                link={project.link}
                />
            ))}

        </div>
    </section>
  )
}

export default Projects
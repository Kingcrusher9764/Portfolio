import React from 'react'
import "./About.css"

const About = ({about}) => {
    
  return (
    <section id='about' className="about_container">
        <h2 className="about_title">
            ABOUT
        </h2>

        <div className="about_cards">
            {about && about.map(data=>(
                <div className="about_card" key={`ab${data.id}`}>
                    <h2 className="card_title">
                        {data.title}
                    </h2>

                    <hr />
                    
                    <p className="card_desc">
                        {data.description}
                    </p>
                </div>
            ))}

        </div>
    </section>
  )
}

export default About
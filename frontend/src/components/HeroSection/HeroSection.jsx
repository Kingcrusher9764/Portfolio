import React, { useEffect } from 'react'
import "./HeroSection.css"
// import { useGSAP } from '@gsap/react'
// import gsap from "gsap"

const HeroSection = () => {

    // const {contextSafe} = useGSAP()

    // useEffect(()=>{
    //     imgAppear()
    //     infoAppear()
    // }, [])

    // const imgAppear = contextSafe(()=>{
    //     gsap.from(".hero_left", {
    //         x: -100,
    //         opacity: 0,
    //         delay: 0.2,
    //         duration: 0.8,
    //     })
    // })

    // const infoAppear = contextSafe(()=>{
    //     gsap.from(".hero_title, .hero_desc, .button1", {
    //         x: 100,
    //         opacity: 0,
    //         delay: 0.2,
    //         duration: 0.8,
    //         stagger: 0.4,
    //     })
    // })

  return (
    <section className="hero_container">
        <div className="hero_left">
            <img src="images/heroImg.jpeg" alt="" />
        </div>
        <div className="hero_right">
            <h1 className="hero_title">
                Hi, I'm Vikrant Tiwari👋
            </h1>

            <p className='hero_desc'>I'm a developer with knowledge of frontend and backend using React.js, Node.js and Django. Reach out if you'd like to learn more.</p>

            <button className='button1'>
                <a href="resume/Resume__.pdf" download="resume">Download CV <i className="ri-file-download-line"></i></a>
            </button>
        </div>
    </section>
  )
}

export default HeroSection
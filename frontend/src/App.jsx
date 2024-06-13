import './App.css'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Projects from './components/Projects/Projects'
import newRequest from "./utils/newRequest"

const App = () => {
  const [projects, setProjects] = useState(null)
    const [tags, setTags] = useState(null)
    const [about, setAbout] = useState(null)

    useEffect(()=>{
        getData()
    }, [])

    const getData = async ()=>{
        // about
        const aboutresult = await newRequest.get("/api/about/")
        setAbout(aboutresult.data)
        
        // skill tags
        const tagsresult = await newRequest.get("/api/tags/")
        // transformed into JSON format for easy retrieval using id
        var tagsList = {}
        tagsresult.data.map(tag=>{
          tagsList[tag.id] = {name:tag.name, image:tag.image_link}
        })
        setTags(tagsList)
          
        // projects 
        const projectresult = await newRequest.get("/api/projects/")
        setProjects(projectresult.data)
    }
  return (
    <>
      <Navbar />
      <HeroSection />
      <About about={about}/>
      <Skill tags={tags} />
      <Projects projects={projects} tags={tags} />
      <Footer />
    </>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const {contextSafe} = useGSAP()
    
    useEffect(()=>{
        itemAppear()
    }, [])

    const menuOpen = contextSafe(()=>{
        gsap.to(".nav_menu",{
            top: 0,
            duration: 0.5,
        })
    })
    const menuClose = contextSafe(()=>{
        gsap.to(".nav_menu",{
            top: -500,
            duration: 0.5,
        })
    })

    const itemAppear = contextSafe(()=>{
        gsap.from(".nav_title, .nav_menuIcon, .nav_item", {
            y: -30,
            opacity: 0,
            delay: 0.5,
            duration: 0.3,
            stagger: 0.3,
        })
    })

  return (
    <nav className='nav_container'>
        <h1 className='nav_title'>PORTFOLIO</h1>
        <button className='nav_menuIcon' onClick={menuOpen}>
            <i className="ri-menu-line"></i>
        </button>
        <ul className={`nav_menu ${isMenuOpen && 'openMenu'}`}
            onClick={menuClose}
        >
            <li className='nav_item'><a href="#about">ABOUT</a></li>
            <li className='nav_item'><a href="#skill">SKILLS</a></li>
            <li className='nav_item'><a href="#project">PROJECTS</a></li>
            <li className='nav_item'><a href="#contact">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
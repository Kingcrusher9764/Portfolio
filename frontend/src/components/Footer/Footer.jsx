import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer id='contact' className='footer_container'>
      <div className="footer_info">
        <div className="footer_left">
          <h1>Contact Me</h1>
          <p>Feel free to reach out!</p>
        </div>
        <div className="footer_right">

          <a href="https://github.com/Kingcrusher9764" target='blank' className="footer_link">
            <i className="ri-github-fill"></i> <span>Github</span>
          </a>

          <a href="https://www.linkedin.com/in/vikrant-tiwari9764/" target='blank' className="footer_link">
            <i className="ri-linkedin-box-fill"></i> <span>Linkedin</span>
          </a>

          <a href="mailto:tiwarivikrant9764@gmail.com" target='blank' className="footer_link">
            <i className="ri-mail-line"></i> <span>Gmail</span>
          </a>

        </div>
      </div>
      <div className="footer_copyright">
        Copyright &copy; Vikrant Tiwari. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
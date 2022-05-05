import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
      <ul className='permalinks' data-aos="fade-up" data-aos-duration="2000">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#experience">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials" data-aos="fade-up" data-aos-duration="2300">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
      </div>

      <div className="footer__copyright" data-aos="fade-up" data-aos-duration="2800">
        <small>&copy;Tseng-Kuo-Lun. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
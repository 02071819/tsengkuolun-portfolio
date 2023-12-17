import React from 'react'
import './footer.css'
import workicon from "../../assets/104_icon.png"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

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
        <a href="https://www.facebook.com/profile.php?id=100006004980674"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://github.com/02071819"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/alan-tseng-1bb6071a6/"><BsLinkedin/></a>
        <a href="https://pda.104.com.tw/profile/share/jJpCwXOMLj2ctXobMpM0coSGj3wzDKwH"><img src={workicon} className="workicon"/></a>
      </div>

      <div className="footer__copyright" data-aos="fade-up" data-aos-duration="2800">
        <small>&copy;Tseng-Kuo-Lun. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer

import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alan-tseng-1bb6071a6/" ><BsLinkedin size='30px'/></a>
        <a href="https://www.facebook.com/profile.php?id=100006004980674" ><BsFacebook size='30px'/></a>
        <a href="https://github.com/02071819" ><BsGithub size='30px'/></a>
    </div>
  )
}

export default HeaderSocials

import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yai0vi9', 'template_mko9cms', form.current, 'bHx2YOZsN1q4-J2FL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact' className='contact__section'>
      <h5>聯絡我</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options" data-aos="fade-up" data-aos-duration="2000">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>alan89021823@gmail.com</h5>
            <a href="mailto:alan89021823@gmail.com" target="_blank">寄送郵件</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="3000">
          <input type="text" name='name' placeholder='您的全名' required/>
          <input type="email" name='email' placeholder='您的 Email' required/>
          <textarea type="message" rows="7" placeholder='您的內容' required />
          <button type='submit' className='btn btn-primary'>寄送郵件</button>
        </form>
      </div>
    </section>
  );
};

export default Contact
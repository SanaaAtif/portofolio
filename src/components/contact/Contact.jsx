import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
function Contact() {
  return (
    <section classNam='contact' id='contact'>
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
       <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>sanaaatif141@gmail</h5>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sanaaatif141@gmail.com&su=Hello%20from%20your%20portfolio"
  target="_blank"
  rel="noreferrer"
>
  Send a message
</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Sanaa Atif</h5>
            <a
              href="https://m.me/sanaa.atif.754"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
            
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+20 1096585736</h5>
            <a href="https://wa.me/021096585736" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
          <form>
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        
       </div>
    </section>


  )
}

export default Contact
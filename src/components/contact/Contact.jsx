import React, { useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const EMAIL = 'sanaaatif141@gmail.com'

function Contact() {
  const [status, setStatus] = useState('')

  // No backend: the form opens the visitor's mail app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('Your mail app should open with the message ready to send.')
    e.target.reset()
  }

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>{EMAIL}</h5>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Hello%20from%20your%20portfolio`}
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Sanaa Atif</h5>
            <a href="https://m.me/sanaa.atif.754" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+20 109 658 5736</h5>
            <a href="https://wa.me/201096585736" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {status && <p className="form_status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact

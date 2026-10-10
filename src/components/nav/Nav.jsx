import React, { useEffect, useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiCodeSSlashLine } from 'react-icons/ri'

const links = [
  { id: 'home', label: 'Home', icon: <AiOutlineHome /> },
  { id: 'about', label: 'About', icon: <AiOutlineUser /> },
  { id: 'skills', label: 'Skills', icon: <BiBook /> },
  { id: 'projects', label: 'Projects', icon: <RiCodeSSlashLine /> },
  { id: 'contact', label: 'Contact', icon: <BiMessageSquareDetail /> },
]

function Nav() {
  const [active, setActive] = useState('home')

  // highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav" aria-label="Main navigation">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={active === link.id ? 'active' : ''}
          aria-label={link.label}
          title={link.label}
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  )
}

export default Nav

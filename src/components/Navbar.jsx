import React, { useEffect, useState } from 'react'
import { navLinks } from '../data'
import "../sections.css"

export default function Navbar({ show, onOpenTemplates }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.slice(1))
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className={`nav${show ? ' show' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo grad-text">&lt;BK /&gt;</a>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <button
            className="btn btn-sale nav-cta"
            onClick={() => {
              setOpen(false)
              onOpenTemplates()
            }}
          >
            Templates
          </button>
        </nav>

        <button
          className={`burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
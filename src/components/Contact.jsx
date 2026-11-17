import React, { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile, socials, whatsappLink } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Get in touch" title="Let's Work Together" />
        <div className="contact-grid">
          <Reveal className="contact-info">
            <a href={`mailto:${profile.email}`} className="info-card">
              <span className="info-icon">✉️</span>
              <span>
                <small>Email</small>
                <strong>{profile.email}</strong>
              </span>
            </a>
            <a
              href={whatsappLink("Hi Kingsley, I saw your portfolio and I'd like to talk.")}
              target="_blank"
              rel="noreferrer"
              className="info-card"
            >
              <span className="info-icon">💬</span>
              <span>
                <small>WhatsApp</small>
                <strong>Chat with me directly</strong>
              </span>
            </a>
            <div className="socials">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
            <a href={profile.cv} download className="btn">Download CV</a>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={submit}>
              <label>
                Your name
                <input name="name" value={form.name} onChange={update} required />
              </label>
              <label>
                Message
                <textarea name="message" value={form.message} onChange={update} required />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
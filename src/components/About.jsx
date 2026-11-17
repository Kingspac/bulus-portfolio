import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SafeImage from './SafeImage'
import { profile, about, projects, templates } from '../data'

const stats = [
  { value: `${projects.length}+`, label: 'Projects' },
  { value: 'MERN', label: 'Core stack' },
  { value: templates.length, label: 'Templates' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About me" title="Who I Am" />
        <div className="about-grid">
          <Reveal className="about-photo">
            <div className="about-frame">
              <SafeImage
                src={profile.photo}
                alt={profile.name}
                fallback={<span className="avatar-fallback">BK</span>}
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="about-text">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong className="grad-text">{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="about-actions">
              <a href={profile.cv} download className="btn btn-primary">
                Download CV
              </a>
              <a href="#contact" className="btn">Let's Talk</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
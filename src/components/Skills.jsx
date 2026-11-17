import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="My toolkit" title="Skills & Technologies" />
        <Reveal>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div key={s} className="skill" style={{ '--i': i }}>
                {s}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
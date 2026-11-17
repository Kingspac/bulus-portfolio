import React, { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SafeImage from './SafeImage'
import { projects } from '../data'

const INITIAL = 5

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const list = showAll ? projects : projects.slice(0, INITIAL)
  const hasMore = projects.length > INITIAL

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="My work" title="Featured Projects" />

        <div className="proj-grid">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="proj-card"
              >
                <div className="proj-img">
                  <SafeImage
                    src={p.image}
                    alt={p.title}
                    fallback={
                      <span className="proj-fallback">
                        {p.title.slice(0, 2).toUpperCase()}
                      </span>
                    }
                  />
                </div>
                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="proj-tech">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="proj-link">View project →</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="center">
            <button className="btn" onClick={() => setShowAll(!showAll)}>
              {showAll
                ? 'Show Less'
                : `Explore More (${projects.length - INITIAL})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
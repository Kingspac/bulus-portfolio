import SafeImage from './SafeImage'
import { profile } from '../data'

const stack = ['MongoDB', 'Express', 'React', 'Node.js']

export default function Hero({ show, onOpenTemplates }) {
  return (
    <section id="home" className={`hero${show ? ' show' : ''}`}>
      <div className="container hero-inner">
        <div className="avatar-wrap rv" style={{ '--i': 0 }}>
          <div className="avatar">
            <SafeImage
              src={profile.photo}
              alt={profile.name}
              fallback={<span className="avatar-fallback">BK</span>}
            />
          </div>
        </div>

        <div className="hero-text">
          <span className="status-pill rv" style={{ '--i': 1 }}>
            <i /> Available for new projects
          </span>
          <p className="hero-hello rv" style={{ '--i': 2 }}>Hello, I'm</p>
          <h1 className="hero-name grad-text rv" style={{ '--i': 3 }}>
            {profile.name}
          </h1>
          <h2 className="hero-title rv" style={{ '--i': 4 }}>{profile.title}</h2>
          <p className="hero-sub rv" style={{ '--i': 5 }}>{profile.tagline}</p>

          <div className="badges rv" style={{ '--i': 6 }}>
            {stack.map((s) => (
              <span key={s} className="badge">{s}</span>
            ))}
          </div>

          <div className="hero-actions rv" style={{ '--i': 7 }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <button className="btn btn-sale" onClick={onOpenTemplates}>
              Templates for Sale
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
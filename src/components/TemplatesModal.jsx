import React, { useEffect } from 'react'
import SafeImage from './SafeImage'
import { templates, whatsappLink } from '../data'

export default function TemplatesModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const prev = document.body.style.overflow
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <h3>Templates for Sale</h3>
            <p>Ready-made source code. Pay once, download instantly.</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="tpl-grid">
          {templates.map((t) => (
            <article key={t.id} className="tpl-card">
              <div className="tpl-img">
                <SafeImage
                  src={t.image}
                  alt={t.name}
                  fallback={<span className="tpl-fallback">&lt;/&gt;</span>}
                />
              </div>
              <div className="tpl-body">
                <h4>{t.name}</h4>
                <p>{t.desc}</p>
                <div className="tpl-price grad-text">{t.price}</div>
                <a href={t.buy} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Buy Now
                </a>
                <div className="tpl-row">
                  <a href={t.preview} target="_blank" rel="noreferrer" className="btn">
                    Preview
                  </a>
                  <a
                    href={whatsappLink(`Hi Kingsley, I'm interested in the "${t.name}" template (${t.price}).`)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
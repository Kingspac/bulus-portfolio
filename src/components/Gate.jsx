import React, { useEffect, useRef, useState } from 'react'
import { profile } from '../data'

const SCAN_MS = 1800
const GRANT_MS = 800

const LABELS = {
  idle: 'Touch to scan',
  scanning: 'Scanning...',
  granted: 'Access granted',
}

export default function Gate({ opening, onOpen }) {
  const rainRef = useRef(null)
  const timers = useRef([])
  const [scan, setScan] = useState('idle') // idle | scanning | granted

  useEffect(() => {
    const canvas = rainRef.current
    const ctx = canvas.getContext('2d')
    const chars = '01{}<>/=;()MERN$#'.split('')
    const size = 16
    let w, h, cols, drops, raf, last = 0

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      cols = Math.floor(w / size)
      drops = Array.from({ length: cols }, () => Math.random() * -50)
    }

    const draw = (t) => {
      raf = requestAnimationFrame(draw)
      if (t - last < 55) return
      last = t
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillStyle = 'rgba(0,0,0,0.12)'
      ctx.fillRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'
      ctx.font = size + 'px monospace'
      for (let i = 0; i < cols; i++) {
        const ch = chars[(Math.random() * chars.length) | 0]
        ctx.fillStyle =
          i % 3 === 0 ? 'rgba(96,165,250,.85)' : 'rgba(167,139,250,.8)'
        ctx.fillText(ch, i * size, drops[i] * size)
        if (drops[i] * size > h && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const list = timers.current
    return () => list.forEach(clearTimeout)
  }, [])

  const startScan = () => {
    if (scan !== 'idle') return
    setScan('scanning')
    if (navigator.vibrate) navigator.vibrate(30)
    timers.current.push(
      setTimeout(() => {
        setScan('granted')
        if (navigator.vibrate) navigator.vibrate([40, 40, 80])
        timers.current.push(setTimeout(onOpen, GRANT_MS))
      }, SCAN_MS),
    )
  }

  return (
    <div
      className={`gate${opening ? ' opening' : ''}`}
      role="dialog"
      aria-label="Fingerprint scan to enter"
    >
      <div className="gate-light" />

      <div className="gate-world">
        <div className="gate-door left">
          <div className="door-face">
            <span className="door-bolts" />
          </div>
          <span className="door-edge" />
        </div>
        <div className="gate-door right">
          <div className="door-face">
            <span className="door-bolts" />
          </div>
          <span className="door-edge" />
        </div>
      </div>

      <div className="gate-seam" />
      <canvas ref={rainRef} className="gate-rain" />

      <div className="gate-center">
        <p className="gate-tag">&lt;{profile.name} /&gt;</p>

        <button
          type="button"
          className={`scan-btn ${scan}`}
          onClick={startScan}
          aria-label="Scan fingerprint to enter"
        >
          <svg className="scan-progress" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="46" />
          </svg>
          <svg className="scan-print" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M14 60V50A36 36 0 0 1 86 50V46" />
            <path d="M22 70V50A28 28 0 0 1 78 50V62" strokeDasharray="70 6 40 6" />
            <path d="M30 76V50A20 20 0 0 1 70 50V70" />
            <path d="M38 80V50A12 12 0 0 1 62 50V74" strokeDasharray="50 5 30 5" />
            <path d="M46 84V50A4 4 0 0 1 54 50V80" />
          </svg>
          <span className="scan-line" />
        </button>

        <p className={`gate-status ${scan}`}>{LABELS[scan]}</p>
      </div>
    </div>
  )
}
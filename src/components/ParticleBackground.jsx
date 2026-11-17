import React, { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const colors = ['#8b5cf6', '#6366f1', '#3b82f6', '#a855f7']
    const pointer = { x: -9999, y: -9999 }
    let w, h, raf, particles = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(70, Math.floor((w * h) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.8 + 0.8,
        c: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    const draw = () => {
      raf = requestAnimationFrame(draw)
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const d = Math.hypot(dx, dy)
        if (d > 0 && d < 120) {
          p.x += (dx / d) * 1.5
          p.y += (dy / d) * 1.5
        }

        ctx.globalAlpha = 1
        ctx.fillStyle = p.c
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.globalAlpha = (1 - dist / 120) * 0.35
            ctx.strokeStyle = '#7c83ff'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
    }

    const onMove = (e) => {
      const t = e.touches ? e.touches[0] : e
      pointer.x = t.clientX
      pointer.y = t.clientY
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('pointerup', onLeave)
    window.addEventListener('touchend', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('pointerup', onLeave)
      window.removeEventListener('touchend', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="bg-canvas" />
}
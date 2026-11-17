import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (import.meta.env.DEV) {
  import('eruda').then((eruda) => eruda.default.init())

  const showError = (message) => {
    let box = document.getElementById('dev-error-box')
    if (!box) {
      box = document.createElement('pre')
      box.id = 'dev-error-box'
      box.style.cssText =
        'position:fixed;left:0;right:0;bottom:0;max-height:40vh;overflow:auto;' +
        'margin:0;padding:12px;background:#1a0000;color:#ff6b6b;font-size:12px;' +
        'z-index:99999;white-space:pre-wrap;'
      box.onclick = () => box.remove()
      document.body.appendChild(box)
    }
    box.textContent = message + '\n\n(tap to dismiss)'
  }

  window.addEventListener('error', (e) => {
    showError(`${e.message}\n${e.filename}:${e.lineno}`)
  })
  window.addEventListener('unhandledrejection', (e) => {
    showError(`Unhandled promise: ${e.reason}`)
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
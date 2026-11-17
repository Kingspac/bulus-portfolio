import { useEffect, useState } from 'react'
import './sections.css'
import ParticleBackground from './components/ParticleBackground'
import Gate from './components/Gate'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import TemplatesModal from './components/TemplatesModal'

export default function App() {
  const [stage, setStage] = useState('gate') // gate -> opening -> done
  const [showTemplates, setShowTemplates] = useState(false)

  const openGate = () => {
    if (stage !== 'gate') return
    setStage('opening')
    setTimeout(() => setStage('done'), 2900)
  }

  useEffect(() => {
    document.body.style.overflow = stage === 'done' ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [stage])

  const openTemplates = () => setShowTemplates(true)

  return (
    <>
      <ParticleBackground />
      <Navbar show={stage !== 'gate'} onOpenTemplates={openTemplates} />
      <main>
        <Hero show={stage !== 'gate'} onOpenTemplates={openTemplates} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      {stage !== 'done' && (
        <Gate opening={stage === 'opening'} onOpen={openGate} />
      )}
      {showTemplates && (
        <TemplatesModal onClose={() => setShowTemplates(false)} />
      )}
    </>
  )
}

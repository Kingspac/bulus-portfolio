import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  )
}
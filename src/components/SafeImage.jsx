import React, { lazy, useState } from 'react'

export default function SafeImage({ src, alt, className, fallback = null }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return fallback
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
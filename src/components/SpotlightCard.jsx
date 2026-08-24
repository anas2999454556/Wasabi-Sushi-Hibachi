import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import './SpotlightCard.css'

/**
 * SpotlightCard — reactbits.dev style "spotlight" hover effect.
 * A radial gradient tracks the cursor to highlight the surface.
 * Colors come from the theme's --uni variable, so the look stays
 * consistent with the rest of the design.
 */
export default function SpotlightCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const background = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, rgba(232, 115, 74, 0.18), transparent 70%)`

  const onMouseMove = (e) => {
    if (!ref.current) return
    const { left, top } = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMouseMove}
      className={`spotlight ${className}`}
      {...rest}
    >
      <motion.div className="spotlight__halo" style={{ background }} />
      <div className="spotlight__content">{children}</div>
    </MotionTag>
  )
}

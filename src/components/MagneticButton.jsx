import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import './MagneticButton.css'

/**
 * MagneticButton — reactbits.dev style.
 * Wraps any element and pulls it toward the cursor while hovering.
 * Children are passed through unchanged (links, buttons, divs, ...).
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  range = 120,
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring smoothing gives the soft, weighted feel reactbits is known for.
  const springConfig = { stiffness: 200, damping: 18, mass: 0.4 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Slight rotation depending on the cursor direction.
  const rotate = useTransform(
    [x, y],
    ([latestX, latestY]) => (latestX / range) * 4
  )

  const onMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    const distance = Math.hypot(offsetX, offsetY)

    if (distance < range) {
      mouseX.set(offsetX * strength)
      mouseY.set(offsetY * strength)
    } else {
      mouseX.set(0)
      mouseY.set(0)
    }
  }

  const onMouseLeave = () => {
    setHovering(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={`magnetic ${hovering ? 'magnetic--active' : ''} ${className}`}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onMouseLeave}
      style={{ x, y, rotate, display: 'inline-block' }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

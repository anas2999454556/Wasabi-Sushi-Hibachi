import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import './TiltCard.css'

/**
 * TiltCard — reactbits.dev style 3D tilt on hover.
 * Rotates around the X / Y axis based on cursor position
 * and adds a specular highlight via a CSS overlay.
 */
export default function TiltCard({ children, className = '', as: Tag = 'div', intensity = 12, ...rest }) {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity])
  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity])

  const onMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const MotionTag = motion[Tag] || motion.div

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      className={`tilt ${className}`}
      {...rest}
    >
      <div className="tilt__inner">{children}</div>
    </MotionTag>
  )
}

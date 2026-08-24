import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ParallaxSection.css'

/**
 * ParallaxSection — reactbits.dev style parallax wrapper.
 * Translates the inner content as it scrolls through the viewport.
 *
 * Props:
 *  - speed: multiplier applied to scroll progress (0.2 = subtle, 0.6 = strong).
 *  - direction: 'up' | 'down' — flips the translation sign.
 *  - className: applied to the inner scroller so layout is controlled by the consumer.
 */
export default function ParallaxSection({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const sign = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * sign, -100 * speed * sign])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.7])

  const MotionTag = motion[Tag] || motion.div

  return (
    <Tag ref={ref} className={`parallax ${className}`}>
      <MotionTag style={{ y, opacity, willChange: 'transform, opacity' }}>
        {children}
      </MotionTag>
    </Tag>
  )
}

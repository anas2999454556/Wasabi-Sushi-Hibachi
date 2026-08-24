import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion'
import './AnimatedCounter.css'

/**
 * AnimatedCounter — counts from 0 to `value` when the element enters the viewport.
 * Mirrors a common reactbits.dev "CountUp" effect while keeping the existing
 * serif/mono typography intact.
 */
export default function AnimatedCounter({
  value = 0,
  prefix = '',
  suffix = '',
  duration = 1.6,
  className = '',
  decimals = 0,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    const fixed = Number(latest).toFixed(decimals)
    return `${prefix}${fixed}${suffix}`
  })
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [inView, value, duration, count, rounded])

  return (
    <motion.span ref={ref} className={`counter ${className}`}>
      {display}
    </motion.span>
  )
}

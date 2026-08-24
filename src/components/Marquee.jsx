import { motion } from 'framer-motion'
import './Marquee.css'

/**
 * Marquee — reactbits.dev style infinite horizontal scroller.
 * Uses duplicate tracks so the loop is seamless.
 */
export default function Marquee({
  items = [],
  speed = 28,
  className = '',
  separator = '✦',
  direction = 'left',
}) {
  const directionMultiplier = direction === 'right' ? 1 : -1

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={{ x: directionMultiplier === -1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__text">{item}</span>
            <span className="marquee__sep">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

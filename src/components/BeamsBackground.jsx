import { motion } from 'framer-motion'
import './BeamsBackground.css'

/**
 * BeamsBackground — reactbits.dev style animated light beams.
 * Uses the existing brand colors (uni / gold / jade) so it stays
 * visually consistent with the rest of the site.
 */
const BEAMS = [
  { delay: 0, x: '12%', color: 'var(--uni)', width: 18, duration: 11 },
  { delay: 2, x: '34%', color: 'var(--gold)', width: 12, duration: 14 },
  { delay: 5, x: '58%', color: 'var(--uni)', width: 22, duration: 9 },
  { delay: 7, x: '78%', color: 'var(--jade)', width: 14, duration: 13 },
  { delay: 3, x: '90%', color: 'var(--gold)', width: 10, duration: 16 },
]

export default function BeamsBackground() {
  return (
    <div className="beams" aria-hidden="true">
      {BEAMS.map((beam, i) => (
        <motion.span
          key={i}
          className="beams__beam"
          style={{
            left: beam.x,
            width: beam.width,
            background: `linear-gradient(to bottom, transparent, ${beam.color}, transparent)`,
          }}
          initial={{ y: '-120%', opacity: 0 }}
          animate={{
            y: ['-120%', '120%'],
            opacity: [0, 0.55, 0.55, 0],
          }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

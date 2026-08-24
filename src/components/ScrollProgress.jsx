import { motion, useScroll, useSpring } from 'framer-motion'
import './ScrollProgress.css'

/**
 * ScrollProgress — reactbits.dev style top progress bar.
 * Uses brand color (--uni) so it matches the rest of the site.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  })

  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

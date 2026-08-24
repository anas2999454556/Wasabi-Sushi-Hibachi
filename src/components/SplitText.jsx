import { motion } from 'framer-motion'
import './SplitText.css'

/**
 * SplitText — reactbits.dev style.
 * Splits children into per-character / per-word spans and animates them in.
 * Preserves the original typography of the host by inheriting font styles.
 */
export default function SplitText({
  children,
  as: Tag = 'h1',
  className = '',
  by = 'word', // 'word' | 'char'
  delay = 0,
  stagger = 0.04,
  duration = 0.7,
  from = { y: 32, opacity: 0 },
  to = { y: 0, opacity: 1 },
  triggerOnView = true,
  once = true,
}) {
  const text = typeof children === 'string' ? children : ''
  const tokens = by === 'char' ? Array.from(text) : text.split(' ')

  const MotionTag = motion[Tag] || motion.h1

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  }

  const item = {
    hidden: from,
    show: {
      y: to.y,
      opacity: to.opacity,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <MotionTag
      className={`split-text ${className}`}
      variants={container}
      initial="hidden"
      {...(triggerOnView
        ? { whileInView: 'show', viewport: { once, amount: 0.4 } }
        : { animate: 'show' })}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          variants={item}
          className="split-text__item"
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {token}
          {by === 'word' && i < tokens.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionTag>
  )
}

import { motion } from 'framer-motion'
import './ShimmerButton.css'

/**
 * ShimmerButton — reactbits.dev style "shimmer" CTA.
 * Drop-in replacement for `.btn .btn-primary`. Keeps the same look
 * (uses --uni / --gold from the theme) but adds a moving sheen.
 */
export default function ShimmerButton({
  children,
  className = '',
  as: Tag = 'button',
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.button

  return (
    <MotionTag
      className={`btn btn-primary shimmer-btn ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      {...rest}
    >
      <span className="shimmer-btn__label">{children}</span>
      <span className="shimmer-btn__sheen" aria-hidden="true" />
    </MotionTag>
  )
}

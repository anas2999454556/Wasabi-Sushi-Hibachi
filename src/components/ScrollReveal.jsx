import useScrollAnimation from '../hooks/useScrollAnimation'
import './ScrollReveal.css'

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useScrollAnimation(0.12)

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function StaggerItem({ children, className = '', index = 0 }) {
  const [ref, visible] = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {children}
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SplitText from './SplitText'
import MagneticButton from './MagneticButton'
import BeamsBackground from './BeamsBackground'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <BeamsBackground />
      <div className="hero-glow" />
      <svg className="wave" viewBox="0 0 1200 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M-100,340 C150,300 300,380 500,340 C700,300 850,360 1300,320" fill="none" stroke="#c9a15a" strokeOpacity="0.18" strokeWidth="1.5"/>
        <path d="M-100,400 C180,370 320,430 560,390 C780,355 900,410 1300,370" fill="none" stroke="#e8734a" strokeOpacity="0.16" strokeWidth="1.5"/>
        <path d="M-100,460 C220,440 360,480 600,450 C820,420 960,470 1300,440" fill="none" stroke="#5c7a6b" strokeOpacity="0.20" strokeWidth="1.5"/>
      </svg>
      <div className="wrap hero-inner">
        <h1 className="hero-title">
          <SplitText as="span" by="word" delay={0.05} stagger={0.06}>Fresh fish,</SplitText>
          <br />
          <em>
            <SplitText as="span" by="word" delay={0.2} stagger={0.06} triggerOnView={false}>open flame,</SplitText>
          </em>{' '}
          <span className="accent">
            <SplitText as="span" by="word" delay={0.35} stagger={0.06} triggerOnView={false}>one table.</SplitText>
          </span>
        </h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Wasabi Sushi &amp; Hibachi brings together two traditions under one roof.
          Hand-rolled nigiri at the bar, hibachi-grilled cuts at the counter.
          Nothing frozen, nothing faked.
        </motion.p>
        <div className="hero-cta">
          <MagneticButton>
            <Link to="/reserve" className="btn btn-primary shimmer-btn hero-cta__primary">
              <span className="shimmer-btn__label">Reserve a table</span>
              <span className="shimmer-btn__sheen" aria-hidden="true" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link to="/menu" className="btn btn-ghost">View the menu</Link>
          </MagneticButton>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="num">(203) <span>527-5711</span></div>
            <div className="label">Call to reserve</div>
          </div>
          <div className="stat">
            <div className="num">Daily</div>
            <div className="label">Fresh fish delivery</div>
          </div>
          <div className="stat">
            <div className="num">100<span>%</span></div>
            <div className="label">Authentic recipes</div>
          </div>
        </div>
      </div>
    </section>
  )
}

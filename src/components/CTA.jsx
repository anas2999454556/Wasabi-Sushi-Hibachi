import { Link } from 'react-router-dom'
import SplitText from './SplitText'
import MagneticButton from './MagneticButton'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section" style={{ borderTop: '1px solid var(--line-soft)' }}>
      <div className="wrap">
        <h2>
          <SplitText as="span" by="word" stagger={0.05}>Two kitchens.</SplitText>
          <br />
          <SplitText as="span" by="word" stagger={0.05} delay={0.15}>One standard.</SplitText>{' '}
          <em>
            <SplitText as="span" by="word" stagger={0.05} delay={0.3}>Your night.</SplitText>
          </em>
        </h2>
        <div className="cta-buttons">
          <MagneticButton>
            <a className="btn btn-primary shimmer-btn cta-call" href="tel:+18042955421">
              <span className="shimmer-btn__label">Call to reserve</span>
              <span className="shimmer-btn__sheen" aria-hidden="true" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <Link to="/menu" className="btn btn-ghost">See the menu</Link>
          </MagneticButton>
        </div>
        <div className="cta-note">
          +1 804-295-5421 · Walk-ins welcome, reservations preferred
        </div>
      </div>
    </section>
  )
}

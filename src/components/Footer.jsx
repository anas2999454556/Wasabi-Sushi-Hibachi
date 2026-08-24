import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="find-us">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">WASABI<sup className="logo-sup">首选</sup></div>
            <p>
              Sushi and hibachi done right.
              Fresh fish, open flame, nothing faked.
            </p>
          </div>
          <div className="foot-col">
            <h5>Visit</h5>
            <a href="tel:+18042955421">+1 804-295-5421</a>
            <span>Mon–Sat, 11:30 AM – 10:00 PM</span>
            <span>Sun, 12:00 PM – 9:00 PM</span>
          </div>
          <div className="foot-col">
            <h5>Navigate</h5>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/reserve">Reservations</Link>
          </div>
          <div className="foot-col">
            <h5>Follow</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>&copy; 2026 Wasabi Sushi &amp; Hibachi. All rights reserved.</div>
          <div>
            <span className="live-dot" />
            Open for dinner service
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="wrap navbar__inner">
        <NavLink to="/" className="navbar__logo">
          WASABI<sup className="navbar__logo-sup">首选</sup>
        </NavLink>
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/reserve" onClick={() => setMenuOpen(false)}>Reserve</NavLink>
        </div>
        <a className="btn btn-ghost navbar__cta" href="tel:+12035275711">
          (203) 527-5711
        </a>
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar__burger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`navbar__burger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </nav>
    </header>
  )
}

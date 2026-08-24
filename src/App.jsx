import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import ReservePage from './pages/ReservePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reserve" element={<ReservePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

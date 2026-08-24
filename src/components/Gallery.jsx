import { StaggerItem } from './ScrollReveal'
import TiltCard from './TiltCard'
import SpotlightCard from './SpotlightCard'
import './Gallery.css'

const images = [
  { src: '/images/Gemini_Generated_Image_25c1x225c1x225c1.jpg', alt: 'Sushi platter with nigiri and maki rolls' },
  { src: '/images/Gemini_Generated_Image_9jb28s9jb28s9jb2.jpg', alt: 'Hibachi grill with flame-cooked meats' },
  { src: '/images/Gemini_Generated_Image_exs7dxexs7dxexs7.jpg', alt: 'Fresh sashimi arranged on wooden board' },
  { src: '/images/Gemini_Generated_Image_r9le1pr9le1pr9le.jpg', alt: 'Signature dragon roll close-up' },
  { src: '/images/Gemini_Generated_Image_ypwa4kypwa4kypwa.jpg', alt: 'Japanese interior with warm lighting' },
  { src: '/images/wassapi.jpg', alt: 'Crispy crab rangoons plated with dipping sauce' },
  { src: '/images/Gemini_Generated_Image_dz4kibdz4kibdz4k.jpg', alt: 'Chef preparing fresh sushi at the counter' },
  { src: '/images/Gemini_Generated_Image_f5ibybf5ibybf5ib.jpg', alt: 'Sashimi cuts served on ice' },
  { src: '/images/Gemini_Generated_Image_llbylcllbylcllby.jpg', alt: 'Table set for hibachi dinner service' },
  { src: '/images/Gemini_Generated_Image_zfp1bczfp1bczfp1.jpg', alt: 'Specialty roll topped with sauce and roe' },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Gallery</div>
          <h2>
            See what&apos;s<br />
            <em>on the plate.</em>
          </h2>
          <p>
            Every dish is prepared to order.
            Here's a look at what we serve, day to day.
          </p>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <StaggerItem key={i} index={i}>
              <SpotlightCard className="gallery-spotlight">
                <TiltCard className="gallery-tilt" intensity={8}>
                  <div className="gallery-item">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                </TiltCard>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}

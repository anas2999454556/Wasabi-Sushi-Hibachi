import Gallery from '../components/Gallery'
import ScrollReveal from '../components/ScrollReveal'

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
    </div>
  )
}

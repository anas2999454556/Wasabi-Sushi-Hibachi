import Reservation from '../components/Reservation'
import ScrollReveal from '../components/ScrollReveal'

export default function ReservePage() {
  return (
    <div style={{ paddingTop: 100 }}>
      <ScrollReveal>
        <Reservation />
      </ScrollReveal>
    </div>
  )
}

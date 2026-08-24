import { StaggerItem } from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'
import './Stats.css'

const stats = [
  { num: 2, suffix: '×', label: 'Kitchen stations' },
  { num: 90, suffix: ' min', label: 'Average visit' },
  { value: 'Daily', label: 'Fresh fish delivery' },
  { num: 100, suffix: '%', label: 'Authentic recipes' },
]

export default function Stats() {
  return (
    <div className="band">
      <div className="wrap band-grid">
        {stats.map((s, i) => (
          <StaggerItem key={i} index={i}>
            <div className="band-item">
              <div className="num">
                {typeof s.num === 'number' ? (
                  <AnimatedCounter value={s.num} suffix={s.suffix || ''} duration={1.6} />
                ) : (
                  s.value
                )}
              </div>
              <div className="label">{s.label}</div>
            </div>
          </StaggerItem>
        ))}
      </div>
    </div>
  )
}

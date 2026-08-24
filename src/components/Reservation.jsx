import { StaggerItem } from './ScrollReveal'
import './Reservation.css'

const steps = [
  {
    idx: '01',
    title: 'Call us',
    text: 'Ring (203) 527-5711 with your party size and preferred date. We take reservations by phone.',
  },
  {
    idx: '02',
    title: 'We confirm',
    text: "We'll call back to confirm your table once availability is locked in. Same day, usually within hours.",
  },
  {
    idx: '03',
    title: 'Show up',
    text: "Arrive on time. Your table is ready, your drinks are cold, and the chef knows you're coming.",
  },
]

export default function Reservation() {
  return (
    <section id="reserve">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">How a reservation works</div>
          <h2>
            Three steps,<br />
            <em>then you eat.</em>
          </h2>
          <p>
            No apps, no waitlists, no forms. Just a phone call
            and a confirmed table.
          </p>
        </div>
        <div className="flow">
          {steps.map((step, i) => (
            <StaggerItem key={step.idx} index={i}>
              <div className="flow-step">
                <div className="flow-step-idx">{step.idx}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}

import './Testimonial.css'

export default function Testimonial() {
  return (
    <section>
      <div className="wrap">
        <div className="quote-block">
          <div className="quote-mark">&ldquo;</div>
          <p>
            Best sushi I've had in Virginia. The hibachi grill is a show
            and the nigiri is the real deal. We drive 40 minutes to eat here
            and it's worth every mile.
          </p>
          <div className="quote-attr">
            <div className="dot">R</div>
            <div>
              <div className="name">Rachel M.</div>
              <div className="role">Regular since 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { StaggerItem } from './ScrollReveal'
import './Menu.css'

const menuItems = [
  {
    idx: '01',
    name: 'Salmon Nigiri',
    desc: 'Fresh Atlantic salmon over seasoned rice, finished with a drop of yuzu.',
    origin: 'Norway',
  },
  {
    idx: '02',
    name: 'Tuna Roll',
    desc: 'Bluefin tuna, cucumber, house soy. Tight roll, clean cut.',
    origin: 'Pacific',
  },
  {
    idx: '03',
    name: 'Shrimp Tempura',
    desc: 'Tiger shrimp, light batter, flash-fried. Served with tentsuyu dipping sauce.',
    origin: 'Gulf Coast',
  },
  {
    idx: '04',
    name: 'Dragon Roll',
    desc: 'Eel and cucumber inside, avocado and eel sauce on top. The one everyone orders.',
    origin: 'House-made',
  },
  {
    idx: '05',
    name: 'Hibachi Ribeye',
    desc: '12 oz prime cut, seared on the grill at 700°F, garlic butter, vegetables.',
    origin: 'USDA Prime',
  },
  {
    idx: '06',
    name: 'Hibachi Chicken',
    desc: 'Boneless thigh, teriyaki glaze, grilled onion, zucchini, fried rice.',
    origin: 'Free-range',
  },
  {
    idx: '07',
    name: 'Sashimi Platter',
    desc: 'Chef\'s selection of five cuts, sliced thick, served with pickled ginger and wasabi.',
    origin: 'Daily selection',
  },
  {
    idx: '08',
    name: 'Miso Soup',
    desc: 'White miso, tofu, wakame, scallion. The way it should be, nothing more.',
    origin: 'House-made daily',
  },
]

export default function Menu() {
  return (
    <section id="menu">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The menu</div>
          <h2>
            Sushi and hibachi,<br />
            <em>done right.</em>
          </h2>
          <p>
            Hand-rolled nigiri and rolls at the sushi bar.
            Char-grilled cuts at the hibachi station.
            Every dish starts with what arrived that morning.
          </p>
        </div>
        <div className="menu-items">
          {menuItems.map((item, i) => (
            <StaggerItem key={item.idx} index={i}>
              <div className="menu-item">
                <span className="menu-item-idx">{item.idx}</span>
                <div>
                  <h4>{item.name}</h4>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
                <span className="menu-item-origin">{item.origin}</span>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}

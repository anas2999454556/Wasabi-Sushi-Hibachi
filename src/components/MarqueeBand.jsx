import Marquee from './Marquee'

export default function MarqueeBand({
  items = [
    'Fresh fish daily',
    'Hand-rolled nigiri',
    'Open-flame hibachi',
    'Authentic recipes',
    'Locally loved',
    'No shortcuts',
  ],
}) {
  return <Marquee items={items} speed={32} />
}

export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

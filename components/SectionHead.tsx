type Props = {
  label: string
  heading: string
  lead?: string
}

export default function SectionHead({ label, heading, lead }: Props) {
  return (
    <div className="section-head">
      <p className="eyebrow">{label}</p>
      <h2 className="h2">{heading}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}

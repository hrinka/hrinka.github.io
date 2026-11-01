import type { Dict } from '@/lib/i18n'

const EMAIL = 'rt3mis10@gmail.com'

const socials = [
  { label: 'GitHub', href: 'https://github.com/hrinka' },
  { label: 'X', href: 'https://x.com/rt3mis10' },
  { label: 'Instagram', href: 'https://www.instagram.com/flava_fm/' },
]

export default function Contact({ contact }: { contact: Dict['contact'] }) {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{contact.label}</p>
          <h2 className="h2">{contact.heading}</h2>
          <p className="lead">{contact.lead}</p>
        </div>
        <a className="contact__mail" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <div className="contact__social" style={{ marginTop: 28 }}>
          <span className="muted">{contact.findMe}</span>
          {socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
              {social.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

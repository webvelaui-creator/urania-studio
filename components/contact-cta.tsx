type ContactCtaProps = {
  type?: 'spatiu' | 'serviciu';
  interest?: string;
  label?: string;
};

export function ContactCta({ type, interest, label = 'Scrie-ne' }: ContactCtaProps) {
  const query = new URLSearchParams();
  if (type) query.set('type', type);
  if (interest) query.set('interest', interest);
  const href = `/contact/${query.size ? `?${query.toString()}` : ''}`;

  return (
    <section className="contact-strip" aria-labelledby="contact-cta-title">
      <p className="eyebrow">Ai un proiect?</p>
      <h2 id="contact-cta-title">Hai să-i găsim locul potrivit.</h2>
      <Link className="button" href={href}>{label}</Link>
    </section>
  );
}
import Link from 'next/link';

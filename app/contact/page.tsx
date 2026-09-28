import { contactDetails } from '@/data/site-content';
import { createPageMetadata } from '@/lib/seo';
import Image from 'next/image';

export const metadata = createPageMetadata({
  title: 'Contact',
  description: 'Spune-ne despre proiectul tău și află cum îl poate găzdui sau susține Urania Studio.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <main id="content" className="contact-page">
      <section className="contact-intro" aria-labelledby="contact-title">
        <h1 id="contact-title">Hai să ne întâlnim.</h1>
      </section>

      <section className="contact-showcase" aria-label="Date de contact și hartă">
        <article className="contact-card contact-card--details">
          <div className="contact-detail">
            <span className="contact-card__icon" aria-hidden="true"><Image className="contact-card__icon-image" src="/images/contact-icons/phone.png" alt="" width={64} height={64} /></span>
            <p className="contact-card__label">Telefon</p>
            <a className="contact-card__value" href={contactDetails.phoneHref}>{contactDetails.phone}</a>
          </div>
          <div className="contact-detail">
            <span className="contact-card__icon" aria-hidden="true"><Image className="contact-card__icon-image" src="/images/contact-icons/whatsapp.png" alt="" width={64} height={64} /></span>
            <p className="contact-card__label">WhatsApp</p>
            <a className="contact-card__value" href={contactDetails.whatsAppHref} target="_blank" rel="noreferrer">Scrie-ne <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-detail">
            <span className="contact-card__icon" aria-hidden="true"><Image className="contact-card__icon-image" src="/images/contact-icons/facebook.png" alt="" width={64} height={64} /></span>
            <p className="contact-card__label">Facebook</p>
            <a className="contact-card__value" href={contactDetails.facebookHref} target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-detail">
            <span className="contact-card__icon" aria-hidden="true"><Image className="contact-card__icon-image" src="/images/contact-icons/youtube.png" alt="" width={64} height={64} /></span>
            <p className="contact-card__label">YouTube</p>
            <span className="contact-card__value contact-card__value--muted">În curând</span>
          </div>
        </article>

        <article className="contact-map-card">
          <iframe
            className="contact-map"
            title="Harta către Urania Studio, Strada Horea nr. 4, Cluj-Napoca"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.4740666326948!2d23.5875177!3d46.7752623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490f7dde637543%3A0xf82cf94239b30403!2sUrania%20Studio!5e0!3m2!1sro!2sro!4v1789386689635!5m2!1sro!2sro"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="contact-map-card__wash" aria-hidden="true" />
          <div className="contact-map-card__caption">
            <span>Urania Studio</span>
            <small>Horea 4 · Cluj-Napoca</small>
          </div>
          <a
            className="contact-map-card__directions"
            href="https://www.google.com/maps/dir/?api=1&destination=Urania+Creative+Studio%2C+Cluj-Napoca"
            target="_blank"
            rel="noreferrer"
            aria-label="Deschide traseul către Urania Studio în Google Maps"
          >
            <Image src="/images/left-arrow.png" alt="" width={18} height={18} />
          </a>
        </article>
      </section>
    </main>
  );
}

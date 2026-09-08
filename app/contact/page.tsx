import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { contactDetails } from '@/data/site-content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Spune-ne despre proiectul tău și află cum îl poate găzdui sau susține Urania Studio.',
  alternates: { canonical: '/contact/' },
};

type ContactPageProps = {
  searchParams: Promise<{ type?: string; interest?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { type = '', interest = '' } = await searchParams;
  return (
    <main id="content">
      <section className="contact-page-heading">
        <div>
          <p className="eyebrow">Contact / Cluj-Napoca</p>
          <h1>Spune-ne ce vrei să aduci la viață</h1>
        </div>
        <div className="contact-details">
          <p>Ne poți găsi la</p>
          <address>{contactDetails.address}</address>
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
        </div>
      </section>
      <section className="contact-form-section" aria-labelledby="request-title">
        <div>
          <p className="eyebrow">Solicitare</p>
          <h2 id="request-title">Începe conversația</h2>
          <p>Alege spațiul sau serviciul potrivit și spune-ne câteva lucruri despre proiect.</p>
        </div>
        <ContactForm initialType={type} initialInterest={interest} />
      </section>
    </main>
  );
}

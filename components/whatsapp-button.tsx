import Image from 'next/image';

const WHATSAPP_URL = 'https://wa.me/40739333357';

export function WhatsAppButton() {
  return (
    <a
      aria-label="Scrie-ne pe WhatsApp"
      className="whatsapp-button"
      href={WHATSAPP_URL}
      rel="noreferrer"
      target="_blank"
    >
      <Image alt="" height={48} priority src="/images/whatsapp.png" width={48} />
    </a>
  );
}

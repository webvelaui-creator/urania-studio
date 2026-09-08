import { contactDetails, navigation } from '@/data/site-content';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-mark" href="/">Urania</Link>
        <p>Spațiu cultural & creativ<br />Cluj-Napoca</p>
      </div>
      <nav aria-label="Navigație subsol">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
      <address>
        <span>{contactDetails.address}</span>
        <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
      </address>
      <p className="footer-meta">© {new Date().getFullYear()} Urania Studio</p>
    </footer>
  );
}

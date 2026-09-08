import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="content" className="not-found">
      <p className="eyebrow">404 / În afara scenei</p>
      <h1>Pagina nu a fost găsită</h1>
      <p>Linkul poate fi vechi sau pagina s-a mutat.</p>
      <Link className="button" href="/">Înapoi la Urania</Link>
    </main>
  );
}

import type { SiteItem } from '@/data/site-content';
import Link from 'next/link';
import { MediaPlaceholder } from './media-placeholder';

type EditorialCardProps = {
  item: SiteItem;
  href: string;
  index: number;
};

export function EditorialCard({ item, href, index }: EditorialCardProps) {
  const facts = item.features ?? item.sections?.flatMap((section) => section.items);

  return (
    <Link className="editorial-card" href={href}>
      <MediaPlaceholder
        label={item.mediaLabel}
        image={item.image}
        sizes="(max-width: 500px) 7.5rem, (max-width: 800px) 11rem, 18rem"
      />
      <div className="editorial-card-copy">
        <p className="card-label">{String(index + 1).padStart(2, '0')} / {item.eyebrow.split('/')[0]}</p>
        <h2>{item.title}</h2>
        <p>{item.shortDescription}</p>
        {facts?.length ? (
          <ul className="card-facts" aria-label={`Elemente incluse pentru ${item.title}`}>
            {facts.slice(0, 2).map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        ) : null}
        <span className="text-link">Află mai mult <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}

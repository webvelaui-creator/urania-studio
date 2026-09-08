import type { SiteItem } from '@/data/site-content';
import Link from 'next/link';
import { MediaPlaceholder } from './media-placeholder';

type EditorialCardProps = {
  item: SiteItem;
  href: string;
  index: number;
};

export function EditorialCard({ item, href, index }: EditorialCardProps) {
  return (
    <Link className="editorial-card" href={href}>
      <MediaPlaceholder label={item.mediaLabel} />
      <div className="editorial-card-copy">
        <p className="card-label">{String(index + 1).padStart(2, '0')} / {item.eyebrow.split('/')[0]}</p>
        <h2>{item.title}</h2>
        <p>{item.shortDescription}</p>
        <span className="text-link">Află mai mult <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}

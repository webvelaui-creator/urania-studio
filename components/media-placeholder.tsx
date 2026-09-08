import type { SiteImage } from '@/data/site-content';
import Image from 'next/image';

type MediaPlaceholderProps = {
  label: string;
  variant?: 'hero' | 'card' | 'gallery';
  className?: string;
  image?: SiteImage;
  priority?: boolean;
};

export function MediaPlaceholder({ label, variant = 'card', className = '', image, priority = false }: MediaPlaceholderProps) {
  if (image) {
    return (
      <div className={`media-asset media-${variant} ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          width={2048}
          height={2048}
          sizes={variant === 'hero' ? '(max-width: 800px) 100vw, 55vw' : '(max-width: 800px) 100vw, 33vw'}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          style={{ objectPosition: image.objectPosition }}
        />
      </div>
    );
  }

  return (
    <div className={`media-placeholder media-${variant} ${className}`} aria-hidden="true">
      <span>{label}</span>
      <small>MEDIA / PHASE 02</small>
    </div>
  );
}

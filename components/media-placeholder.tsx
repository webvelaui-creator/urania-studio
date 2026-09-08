type MediaPlaceholderProps = {
  label: string;
  variant?: 'hero' | 'card' | 'gallery';
  className?: string;
};

export function MediaPlaceholder({ label, variant = 'card', className = '' }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder media-${variant} ${className}`} aria-hidden="true">
      <span>{label}</span>
      <small>MEDIA / PHASE 02</small>
    </div>
  );
}

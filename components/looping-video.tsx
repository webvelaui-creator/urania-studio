type LoopingVideoProps = {
  src: string | null;
  label: string;
};

export function LoopingVideo({ src, label }: LoopingVideoProps) {
  if (!src) {
    return (
      <div className="looping-video looping-video--placeholder" aria-label={`${label} — video în pregătire`}>
        <span>VIDEO LOOP</span>
        <small>MEDIA ÎN PREGĂTIRE</small>
      </div>
    );
  }

  return (
    <div className="looping-video" aria-label={label}>
      <video autoPlay loop muted playsInline preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

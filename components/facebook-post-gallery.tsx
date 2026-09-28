'use client';

import { useState } from 'react';

type FacebookPost = {
  title: string;
  paragraphs: string[];
  photos: string[];
  href: string;
};

export function FacebookPostGallery({ posts }: { posts: FacebookPost[] }) {
  const [activePhotos, setActivePhotos] = useState(posts.map(() => 0));

  function selectPhoto(postIndex: number, photoIndex: number) {
    setActivePhotos((current) => current.map((active, index) => (index === postIndex ? photoIndex : active)));
  }

  return (
    <section className="facebook-posts" aria-label="Noutăți Urania Studio pe Facebook">
      {posts.map((post, postIndex) => {
        const activePhoto = activePhotos[postIndex];
        const hasMultiplePhotos = post.photos.length > 1;

        return (
          <article className="facebook-post-card" key={post.href}>
            <div className="facebook-post-card__gallery">
              <img className="facebook-post-card__image" src={post.photos[activePhoto]} alt="Fotografie dintr-o postare Urania Studio" />
              {hasMultiplePhotos && (
                <>
                  <button
                    className="facebook-post-card__arrow facebook-post-card__arrow--previous"
                    type="button"
                    onClick={() => selectPhoto(postIndex, (activePhoto - 1 + post.photos.length) % post.photos.length)}
                    aria-label="Fotografia anterioară"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  </button>
                  <button
                    className="facebook-post-card__arrow facebook-post-card__arrow--next"
                    type="button"
                    onClick={() => selectPhoto(postIndex, (activePhoto + 1) % post.photos.length)}
                    aria-label="Fotografia următoare"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                  <div className="facebook-post-card__dots" aria-label="Alege fotografia">
                    {post.photos.map((_, photoIndex) => (
                      <button
                        aria-label={`Fotografia ${photoIndex + 1}`}
                        aria-pressed={activePhoto === photoIndex}
                        className={activePhoto === photoIndex ? 'is-active' : ''}
                        key={photoIndex}
                        onClick={() => selectPhoto(postIndex, photoIndex)}
                        type="button"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="facebook-post-card__copy">
              <p className="eyebrow">Din comunitatea Urania</p>
              <h2>{post.title}</h2>
              <div className="facebook-post-card__description">
                {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <a className="facebook-post-card__link" href={post.href} target="_blank" rel="noreferrer">
                Vezi postarea pe Facebook <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
}

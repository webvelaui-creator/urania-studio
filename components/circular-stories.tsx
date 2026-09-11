'use client';

import Image from 'next/image';
import { useState } from 'react';

type Story = { category: string; title: string; description: string; image: string; imageAlt: string };
type CircularStoriesProps = { stories: Story[] };

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d={direction === 'left' ? 'M19 12H5M12 19l-7-7 7-7' : 'M5 12h14M12 5l7 7-7 7'} /></svg>;
}

export function CircularStories({ stories }: CircularStoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];
  const move = (direction: 1 | -1) => setActiveIndex((index) => (index + direction + stories.length) % stories.length);
  const getPosition = (index: number) => {
    let offset = index - activeIndex;
    if (offset > stories.length / 2) offset -= stories.length;
    if (offset < -stories.length / 2) offset += stories.length;
    return offset === 0 ? ' is-active' : offset > 0 ? ' is-next' : ' is-previous';
  };

  return (
    <div className="circular-stories">
      <div className="circular-stories__grid">
        <div className="circular-stories__images" aria-label="Imagini din proiectele Urania">
          {stories.map((story, index) => (
            <button aria-label={`Arată: ${story.title}`} aria-pressed={index === activeIndex} className={`circular-stories__image${getPosition(index)}`} key={story.title} onClick={() => setActiveIndex(index)} type="button">
              <Image src={story.image} alt={story.imageAlt} fill sizes="(max-width: 760px) 76vw, 36vw" />
            </button>
          ))}
        </div>
        <div className="circular-stories__content" aria-live="polite">
          <div className="circular-stories__copy" key={activeStory.title}>
            <h3>{activeStory.title}</h3>
            <p className="circular-stories__category">{activeStory.category}</p>
            <p className="circular-stories__quote">{activeStory.description}</p>
          </div>
          <div className="circular-stories__controls">
            <button aria-label="Povestea anterioară" onClick={() => move(-1)} type="button"><ArrowIcon direction="left" /></button>
            <button aria-label="Povestea următoare" onClick={() => move(1)} type="button"><ArrowIcon direction="right" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

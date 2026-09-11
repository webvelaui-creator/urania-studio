# Source artwork

The original 2048px transparent PNGs (18.4 MB in total) live here so they stay with the
project without being deployed. `public/` now carries WebP derivatives of the same
artwork — visually identical, 1.2 MB in total:

| Deployed WebP        | Source PNG                              |
| -------------------- | --------------------------------------- |
| urania-hero.webp     | Urania-Heather-Picture_transparent.png  |
| carousel.webp        | Carousel_transparent.png                |
| scena.webp           | Scena_transparent.png                   |
| rola-film.webp       | rola film_transparent.png               |
| saxofon.webp         | saxofon_transparent.png                 |
| microfon.webp        | microfon_transparent.png                |
| tv.webp              | tv_transparent.png                      |
| vinil.webp           | vinil_transparent.png                   |

To regenerate after editing a source file (ImageMagick):

    magick "Urania-Heather-Picture_transparent.png" -strip -resize 2048x2048 \
      -quality 82 -define webp:method=6 ../../public/images/urania/urania-hero.webp

Card artwork is generated at 1400px with quality 80; the hero at 2048px, quality 82.

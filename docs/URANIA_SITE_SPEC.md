# Urania Studio — Phase 1 site specification

## 1. Brand positioning

Urania Studio is a multicultural and multidisciplinary creative/cultural space in Cluj-Napoca. It sits at the intersection of performing arts, music, culture, creative production, artistic experimentation, events, and community. The site should feel dark, editorial, theatrical, warm, cultured, slightly vintage, and contemporary—not corporate, SaaS-like, nightclub-like, or like a generic event hall.

## 2. Sitemap

- `/` — Home
- `/servicii/` — Services index
- `/servicii/productie-suport-tehnic/`
- `/servicii/sunet-lumina/`
- `/servicii/streaming-evenimente-hibride/`
- `/servicii/documentare-foto-video/`
- `/servicii/logistica-configurare/`
- `/spatii/` — Spaces index
- `/spatii/scena-black-box/`
- `/spatii/underground-sound-room/`
- `/spatii/podcast-corner/`
- `/despre-urania/`
- `/contact/`

Events and Journal are outside Phase 1.

## 3. Services

1. Producție & suport tehnic
2. Sunet & lumină
3. Streaming & evenimente hibride
4. Documentare foto-video (available on request)
5. Logistică & configurare

NECSSOUND is a specialist partner for projects needing extended sound and lighting expertise. It must not be presented as an internal Urania department.

## 4. Spaces

1. Scena — Black Box
2. Underground — Sound Room
3. Podcast Corner

The bar/social area is not a separately rentable space and receives no Phase 1 rental page or card.

## 5. Information architecture rule

Spaces are physical environments that can be rented. Services are support capabilities Urania or its partners can provide. Theatre, concerts, stand-up, exhibitions, conferences, workshops, and corporate events are examples of formats that Scena — Black Box can host; they are not services and do not receive separate service pages.

## 6. Color system

| Token | Value | Role |
| --- | --- | --- |
| Black Cherry | `#1C0101` | Primary background |
| Oxblood | `#290505` | Secondary/elevated background |
| Merlot | `#3A0513` | Brand burgundy and selected states |
| Mahogany | `#742307` | Warm interactive accent and hover |
| Aged Bronze | `#664830` | Borders and separators |
| Muted Bronze | `#A7805C` | Secondary accent and active detail |
| Champagne | `#EAC994` | Primary text and key highlights |

Dark and neutral surfaces should make up roughly 85–90% of the interface. Bronze is an accent/material, not a shiny gold theme.

## 7. Typography

- Display and headings: Cormorant Garamond, weights 500–600; italic for expressive editorial lines.
- Body and UI: Manrope, weights 400–600.
- Fonts load through the framework with `font-display: swap` behavior.

## 8. Homepage architecture

The homepage remains short: restrained global header, identity hero, three primary editorial entry points (Services, Spaces, About), one contact prompt, and the global footer. It does not duplicate the dedicated page content.

## 9. Contact form behavior

Fields: name, email, optional phone, request type, contextual interest, optional date/period and estimated attendance for space requests, and message. The form reads `type` and `interest` from query parameters, validates in the browser and on the server, exposes loading/success/error states, and uses a honeypot. Submissions are forwarded by the server to `CONTACT_WEBHOOK_URL`; this server-only destination remains to be provided. Until configured, the form gives an honest error and the verified public phone number remains available.

Public contact details migrated from the official current site search result (verified September 2026): Strada Horea, nr. 4, Cluj-Napoca; +40 739 333 357. No email or social URL was added because none was available in the supplied repository.

## 10. Placeholder media strategy

All Phase 1 media uses reusable, decorative, screen-reader-hidden components with stable hero, card, and gallery ratios. Labels identify the future asset type. Media references and labels are centralized through structured content. No stock photography or generated final artwork is used.

## 11. Known missing information / TODOs

- Exact capacity and dimensions of each room
- Confirmed equipment list for Underground — Sound Room
- Confirmed equipment list for Podcast Corner
- Final configurations and any detailed technical models
- Final photography, goddess artwork, service artwork, venue galleries
- Additional verified historical/about information
- Verified contact email and social URLs
- Production contact webhook destination
- Legal pages/content from the legacy site (legacy source was not present in the workspace)

Unknown specifications stay in internal structured data and are not shown as fabricated visitor-facing facts.

## 12. Phase 2

Phase 2 will replace the intentional placeholders with final photography, 3D/goddess artwork, service graphics, and venue galleries while preserving the component API, aspect ratios, accessibility, and responsive behavior established in Phase 1.

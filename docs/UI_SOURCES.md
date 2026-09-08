# UI sources

Phase 1 uses the project scaffold's React/Vinext foundation and native semantic HTML/CSS. No third-party marketing component code, imagery, or external icon system was copied into the site.

The design and implementation follow `docs/UNIVERSAL_WEB_UI_UX_LIBRARY.md`: one coherent visual language, the fewest dependencies, visible focus states, keyboard/touch equivalence, reduced-motion support, responsive layouts, and placeholder media ready for Phase 2 replacement.

The generated scaffold includes shadcn-compatible primitives, but Phase 1's simple navigation, cards, links, and form controls do not need those abstractions. Existing installed primitives remain available for future accessible dialogs, sheets, selects, and similar behavior.

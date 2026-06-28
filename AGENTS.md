# AGENTS.md

## Project
Website for the Bulgarian village Черни Вит.

The site is built with Astro and should stay simple, fast, static, and easy to maintain.

## Language
All public-facing content must be in Bulgarian.
Use clear, warm, natural Bulgarian.
Avoid overly corporate or generic marketing language.

## Visual style
The site should feel local, calm, authentic, and connected to:
- Балкана
- река Черни Вит
- махалите
- зеленото сирене
- училището
- местната история
- природата

Prefer clean layouts, readable typography, generous spacing, and mobile-first design.

## Technical rules
- Use Astro components and pages.
- Keep routes with Bulgarian transliteration, for example:
  - /mahali/
  - /zabelezhitelnosti/
  - /zeleno-sirene/
  - /uchilishte/
  - /galeria/
  - /novini/
  - /kontakti/
- Keep images in /public unless there is a strong reason not to.
- Use semantic HTML.
- Keep CSS simple and centralized when possible.
- Do not add unnecessary dependencies.
- Before finishing a task, make sure the project can build with:
  npm run build

## Content rules
When adding pages, prefer structure:
- hero/title section
- short intro
- cards or content sections
- clear internal links

When information is uncertain, do not invent facts. Use placeholder text or mark it as content to be confirmed.

## SEO
Every important page should have:
- meaningful title
- meta description
- clear H1
- readable page structure

## Git workflow
Make small, understandable changes.
Summarize what files were changed and why.
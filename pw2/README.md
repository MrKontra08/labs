# Practical Work №2 — PETWORLD

Student: Борик Ярослав, МТ-32. Teacher: Ігор Тупичак.

## Files
- `index.html`: **Home**, variant 1 (odd roster position).
- `pets.html`: **Pets**, variant 2 (even roster position).
- `css/style.css`: styles, responsive layout.
- `js/app.js`: mobile navigation.
- `assets/`: images extracted from the provided `Landing Page UI Kit.fig` and a hand-drawn SVG paw icon.

Both variants are included because the student's roster number was not specified. They are linked via the main navigation and CTAs.

## Deployment to GitHub Pages
Copy only the `pw2` folder into the `labs` repository, commit/merge it to `main`, and enable Pages for `main` / `(root)`.

Expected site addresses after publication:
- https://mrkontra08.github.io/labs/pw2/
- https://mrkontra08.github.io/labs/pw2/pets.html

## Notes
- Built as a static responsive site, no backend required.
- Visuals are genuine assets from the uploaded Figma archive, except `paw.svg` (original vector approximation). Layout is visually reconstructed, not an automated pixel-identical Figma export.
- Google Fonts: Poppins; fallback font works offline.

## Git commands (if working from a local clone of labs)

```bash
git switch main
git pull
git switch -c pw2
# copy the pw2 directory to this repository
git add pw2
git commit -m "Add practical work 2 - PETWORLD"
git push -u origin pw2
git switch main
git merge pw2
git push origin main
```

If you use GitHub's web upload interface, use the `pw2` branch selector to create `pw2` first and upload the folder to that branch; merge the resulting PR into main.

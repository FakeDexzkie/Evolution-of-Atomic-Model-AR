# Atom Time Machine AR Website

A Grade 8 web-based Augmented Reality website about the historical development of atomic models.

## Files

- `index.html` - main webpage
- `style.css` - responsive design
- `script.js` - model switching and AR button behavior
- `models/` - GLB files for Android and web preview

## Important for GitHub Pages

Your homepage should contain an `index.html` file.

If your repository is named like this:

- `fakedexzkie.github.io`

then your site is usually:

- `https://fakedexzkie.github.io/`

If your repository has another name, for example:

- `atom-ar-site`

then your site is usually:

- `https://fakedexzkie.github.io/atom-ar-site/`

Do not open only `https://fakedexzkie.github.io/` unless your repository is exactly `fakedexzkie.github.io`.

## Why iPhone showed 404 before

The previous version included `ios-src="models/name.usdz"`, but the `.usdz` files were not yet inside the `models` folder. iPhone Quick Look opens `.usdz` files, so it showed a GitHub Pages 404 error.

This updated version checks first. If the `.usdz` file is missing, the iPhone AR button is disabled instead of opening a broken 404 page.

## How to make iPhone AR work

Convert each `.glb` file into `.usdz`, then upload the `.usdz` files into the same `models` folder.

Use these exact filenames:

- `dalton-solid-sphere.usdz`
- `thomson-plum-pudding.usdz`
- `rutherford-nuclear.usdz`
- `bohr-planetary.usdz`
- `schrodinger-quantum-cloud.usdz`

Android uses the `.glb` files through Scene Viewer. iPhone/iPad uses `.usdz` through Quick Look.

## GitHub upload steps

1. Create or open your GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and the full `models` folder.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Wait 1–5 minutes.
6. Open the correct GitHub Pages link.

## Phone testing tips

- Android: use Chrome.
- iPhone: use Safari for the best Quick Look support.
- Messenger's in-app browser may not fully support AR. Open the link in Safari or Chrome.

# THENRAA Website

React + Vite + Tailwind CSS (v3) + React Router. Static, no backend.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/
    npm run preview    # test the production build

## Deploy (Netlify or Vercel)
SPA fallbacks are already included: `netlify.toml`, `public/_redirects` and `vercel.json`.
- Push this folder to a GitHub repository.
- Netlify: Add new site > Import from Git. Build command `npm run build`, publish directory `dist`.
- Vercel: Add New > Project > import the repo. Framework preset Vite (build `npm run build`, output `dist`).
- Or drag the `dist/` folder onto Netlify Drop after running a build.
Direct links such as /products work on refresh because of the fallback rules.

## Custom domain and HTTPS
1. Buy a domain from a registrar of your choice (not done for you).
2. Netlify: Site configuration > Domain management > Add a domain. Vercel: Project > Settings > Domains.
3. Add the DNS records the host shows you (usually an A record for the root and a CNAME for www) at your registrar.
4. Wait for DNS to update. HTTPS certificates are issued automatically (Let's Encrypt on Netlify, automatic on Vercel).
5. After the domain works, add absolute `og:url` and `og:image` URLs in index.html for better social previews.

## Contact form
The form validates on the client and opens the visitor's email app (`mailto:`). Nothing is sent by the site itself.
To send directly, connect a service such as Formspree or EmailJS: replace the `window.location.href = mailto...`
line in `src/pages/Contact.jsx` with a `fetch` POST to the service endpoint, and show success only when it returns OK.

## Content rules
Copy comes from the THENRAA brochure. Edit products in `src/data/products.js`, future products in
`src/data/futureProducts.js`, SDGs in `src/data/sdgs.js`. Do not add prices or claims unless they are real.

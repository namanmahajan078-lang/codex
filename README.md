# Naman Mahajan Personal Brand Website

Premium personal brand website built with Next.js, Tailwind CSS, Framer Motion, GSAP, Three.js, Markdown CMS, and Stripe checkout.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment setup

1. Copy `.env.example` to `.env.local`.
2. Add Stripe test keys:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
3. Replace `FORMSPREE_ENDPOINT` with your real Formspree endpoint and update the form action in `pages/workspace.js` if needed.

## Stripe notes

- Checkout route: `POST /api/create-checkout-session`
- Uses package id from pricing card and creates Stripe Checkout session in test mode.
- Swap to live keys for production.

## Blog CMS

- Markdown posts live in `/posts`.
- Blog index auto-loads posts by frontmatter date.
- Add new `.md` files with `title`, `date`, and `excerpt` fields.

## Replace 40 placeholder images

Parallax background uses picsum images in `components/ParallaxBackground.js` with `data-placeholder-image="true"`.
Replace URLs with your own CDN/asset URLs while preserving the array length for full effect.

## Deploy on Vercel

1. Push repository to GitHub.
2. Import project in Vercel.
3. Add environment variables from `.env.local`.
4. Deploy.

# ANIK-DEV Portfolio

A customized Next.js portfolio based on the original template structure. The existing `app/` and `public/` asset folders are retained, with ANIK-DEV branding, the supplied profile photo, contact links and individual service pages.

## Local development

```bash
npm install
npm run dev
```

## Build for Cloudflare Pages

```bash
npm install
npm run build
```

The project uses Next.js static export. The generated website is written to `out/`.

Cloudflare Pages settings:
- Framework preset: Next.js (Static HTML Export) or None
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`

Do not upload the source folder as the deployed website. Deploy the contents generated in `out/`, or connect this repository to Cloudflare Pages with the settings above.

## Main routes

- `/`
- `/bot-developer/`
- `/dc-mc-server-developer/`
- `/panel-developer/`
- `/petro-manager-bot/`
- `/payment-gateway-bot/`

## Contact

- Email: anikg4180@gmail.com
- Instagram: https://www.instagram.com/itz_anik.08_/
- Discord: https://discord.gg/6FTBCZuwYz
- RIVEN CLOUD panel: https://panel.rivencloud.bond

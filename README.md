# Portfolio — Jessica Theresia (React)

Portfolio yang sama persis dengan versi HTML sebelumnya, sekarang berupa aplikasi React
(React 19 + React Router 7 + Vite) dengan **routes**, **pages**, **components**, dan **hooks**.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # hasil di dist/
npm run preview
```

`npm run dev` / `build` otomatis menjalankan `scripts/check-live.mjs` untuk memperbarui
`public/live-status.json` (status demo live di kartu proyek).

## Routes

| URL         | Page                                | URL lama (redirect otomatis) |
| ----------- | ----------------------------------- | ---------------------------- |
| `/`         | `pages/home/HomePage.jsx`           | `/index.html`                |
| `/projects` | `pages/projects/ProjectsPage.jsx`   | `/projects.html`             |
| `/ai-ml`    | `pages/aiml/AiMlPage.jsx`           | `/aiml.html`                 |
| `/ui-ux`    | `pages/uiux/UiUxPage.jsx`           | `/uiux.html`                 |
| `/work`     | `pages/work/WorkPage.jsx`           | `/work.html`                 |

Routing ada di `src/routes/AppRoutes.jsx`, daftar path di `src/routes/paths.js`.
Deep link lama `/?project=trustee` tetap berfungsi.

## Struktur

```
src/
  main.jsx, App.jsx
  routes/        AppRoutes, paths
  layouts/       SiteLayout (scroll restoration)
  components/    Navbar, Footer, AppLink, TrainingLightbox
  hooks/         useDocumentMeta, useNavbarBehavior, useScrollRestoration
  pages/<page>/  <Page>.jsx, meta.js (title, CSS & konfigurasi Tailwind halaman), sections/*
  pages/home/projects/   26 kartu proyek (1 komponen per kartu) + index.js (registry PROJECTS)
  pages/home/data/       dokumen studi kasus Trustee
  behaviors/     logika interaktif (carousel, accordion, filter proyek, lightbox, dsb.)
                 + hook use*Behavior yang memasang/membersihkannya per halaman
  styles/        base.css, navbar.css, portfolio-theme.css
public/assets/   gambar yang dulu tertanam base64 di HTML
```

## Catatan penting

- **Desain tidak diubah.** Class Tailwind, CSS, dan urutan elemen sama dengan HTML asli.
  Tailwind tetap memakai Play CDN seperti aslinya (script ada di `index.html`); tiap halaman
  menyetel `tailwind.config`-nya sendiri lewat `useDocumentMeta`.
- Berpindah antar kelompok halaman yang memakai konfigurasi Tailwind berbeda
  (lihat `TAILWIND_GROUP` di `routes/paths.js`) memakai pemuatan dokumen penuh agar konfigurasi
  yang benar selalu dikompilasi. Di dalam satu kelompok navigasi berjalan sebagai SPA.
- `#root` memakai `display: contents` dan selector CSS `body > main` / `body > footer` diubah
  menjadi `body > :where(#root) > main` agar aturan lama tetap berlaku tanpa mengubah specificity.
- Logika interaktif yang berat (kartu proyek, galeri, lab demo) dipertahankan sebagai modul
  DOM di `behaviors/`, dipasang dalam `useEffect` dan dibersihkan saat halaman ditutup
  (`behaviors/home/lifecycle.js`). Markup-nya sendiri sepenuhnya JSX.
- SPA fallback Vercel sudah dikonfigurasi di `vercel.json`, sehingga route seperti
  `/work` dan `/work.html` tetap dilayani oleh `index.html`. Untuk hosting lain,
  aktifkan fallback yang setara (mis. Netlify `_redirects`: `/* /index.html 200`).

## PDF viewing

PDFs (certificates, Trustee documents) are drawn on `<canvas>` with PDF.js (`src/lib/pdfCanvas.js`), so they
display on mobile browsers that cannot embed PDFs. Run `npm install` after pulling to get `pdfjs-dist`.
Mobile-only layout rules live in `src/styles/mobile.css`.

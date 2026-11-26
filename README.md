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

## Project multi-bidang (filter bidang di `#selected-works`)

Filter bidang memakai strip kartu yang sama seperti sebelumnya. Project yang mencakup lebih dari satu bidang
(Trustee, LeadSight, Nusca, Smart Focus Alert, AiSee) muncul di daftar setiap bidangnya dengan nama project yang sama.
Panel detailnya berupa **satu card** berisi: ringkasan + peta bab + video/gambar utama project (overview) di atas, lalu kartu studi kasus tiap bidang
bertumpuk sebagai bab (tiap bab punya band judul yang bisa dilipat dan tautan "Next chapter").
Semua bab awalnya tertutup; pembaca membuka bab yang diinginkan lewat band judulnya atau peta bab. Bab milik bidang yang sedang dibuka ditandai "Selected field". Isi bab langsung berada di card project (tanpa bingkai card kedua). Project satu-bidang tetap memakai kartu aslinya.

- Definisi grup (kartu mana yang digabung, nama bab, ringkasan): `src/pages/home/projects/groups.js`.
  Di file yang sama: `overview` (video Drive + poster, atau gambar mockup) yang ditampilkan **sekali** di overview, dan
  `hide` per bab (elemen yang tidak diulang di bab karena sudah ada di overview, mis. video atau galeri visual yang sama).
- Tidak ada nomor urut di mana pun (daftar, peta bab, band bab). Badge bulat angka di kartu diganti **tahun** project
  (`showProjectYear()`). Urutan daftar = tahun terbaru dulu, lalu urutan tetap di `projectOrder` (`projectSelector.js`;
  pasangan `[kunci, tahun]`, kunci = slug grup atau id kartu). Ubah array itu untuk mengganti urutan atau tahun.
- Tombol "Show Details" dibuat berupa bar berwarna + pill aksen (gaya di akhir `styles/projects.css`).
- Kartu gabungan: `projects/GroupCard.jsx`; gaya: `styles/projects.css`; inisialisasi kartu bertumpuk:
  `initializeGroupStack()` di `behaviors/home/projectSelector.js`.
- "Read my story as": link project membuka bidang yang sedang dipilih di story dan menggulir ke bab bidang itu, mis.
  `/?project=leadsight&field=analytics#selected-works`. Parameter `project` menerima id kartu atau slug grup;
  jika project tidak punya bagian di bidang itu, ia dibuka di bidangnya sendiri.

## Layout section Projects (menu di atas, card melebar)

`#selected-works` memakai satu kolom: menu project di atas, ringkas: dropdown bidang di kiri sejajar dengan daftar kartu project
bidang itu di kanannya (satu baris kartu kompak yang digeser ke samping, tiap kartu berisi gambar, bidang, judul, dan deskripsi singkat; di layar sempit dropdown pindah ke atas daftar) dan kartu penjelasan project selebar penuh di bawahnya (`#about-project-detail`).
Gaya card project tidak diubah. Baris menu dibuat di `renderCategory()` (`behaviors/home/projectSelector.js`),
gayanya di `styles/projects.css` (`.pj-*`).

**Tombol menu melayang** (`#pj-fab`, dirender lewat portal ke `document.body` di `HomePage.jsx` supaya `position: fixed`
tidak terpengaruh transform section): muncul di pojok kanan bawah saat menu di atas sudah tergulir keluar layar dan
section Projects masih terlihat. Hover (mouse) atau klik/tap membuka daftar project ringkas + pilihan bidang; memilih
project langsung menggulir ke awal card project itu. Esc / klik di luar menutup. Logikanya ada di blok
"Floating menu behaviour" pada `projectSelector.js`.

## Menambah gambar project secara manual

Visual tiap project didaftarkan di `src/pages/home/projects/projectAssets.js` (`PROJECT_ASSETS`, kunci = id kartu).
Taruh file di `public/assets/projects/...`, lalu tambahkan satu baris `image("<folder>/<file>", "Judul")` ke kartu yang sesuai.

- **Nusca AI/ML** (`nusca-project-card-2`): daftarnya masih kosong, jadi kartu menampilkan slot gambar kosong
  ("Project visuals coming soon"). Begitu satu gambar didaftarkan, slot otomatis menjadi carousel seperti project lain.
  Saran folder: `public/assets/projects/AI ML Engineer/Nusca/`.
- **LeadSight Frontend** (`leadsight-project-card`): kolom kanan sekarang kartu gambar (dulu video). Sudah berisi
  `Developer/Leadsight.webp`; tambahkan screenshot lain di daftar yang sama.
- Tombol/chip header semua card diseragamkan (acuan: card full-stack Smart Focus Alert); aturannya ada di akhir
  `styles/projects.css` dan `standardizeHeaderControls()` di `projectSelector.js`.

## Section "Where My Skills Connect"

Komponen: `src/pages/home/sections/SkillsJourney.jsx` (gaya di `src/styles/skills-journey.css`).
Isi 5 skill ada di `src/pages/home/sections/skillsData.js` (`pillarsData` untuk card, `pillarMeta` untuk label list dan warna).
List vertikal dengan garis meliuk di kiri, card detail di kanan yang berganti saat skill dipilih (hover, klik, Tab, panah keyboard, atau tombol prev/next).

## Grid latar

Kotak-kotak samar ada di seluruh halaman (`src/styles/portfolio-theme.css`). Di ruang kosong section terang, garisnya lebih tegas:
`src/behaviors/home/emptyGrid.js` menggambar mask dari posisi teks, gambar, dan kartu, lalu `src/styles/empty-grid.css` menampilkan grid kedua yang tegas hanya di area mask. Kekuatan garis diatur di `empty-grid.css`, kelembutan pinggirannya di konstanta `PADDING` dan `BLUR` pada `emptyGrid.js`.

## Bahasa (EN / ID)
Navbar punya tombol **EN | ID**. Pilihan bahasa disimpan di `localStorage` (`portfolio-language`) dan bisa dipaksa lewat URL, mis. `https://domain-kamu/?lang=id` (berguna untuk dikirim ke recruiter Indonesia). Default: English.

Cara kerjanya: konten tetap ditulis dalam bahasa Inggris di komponen, lalu `src/i18n/translator.js` mengganti teks di DOM saat bahasa Indonesia aktif (dan mengembalikannya persis seperti semula saat kembali ke EN).

- `src/i18n/id.js` — kamus Inggris → Indonesia. **Untuk mengubah gaya kalimat, cukup edit nilai di kanan.** Kunci di kiri harus sama persis dengan teks Inggris di situs.
- `src/i18n/patterns.js` — kalimat yang memuat angka/nama (mis. "Show image 3 of 10", "Go to certificate 4", nama bulan di keterangan sertifikat).
- `src/styles/i18n.css` — teks yang dibuat lewat CSS (`::after`, mis. "Show chapter", "Click to enlarge") dan gaya tombol bahasa.
- Teks baru yang kamu tambahkan di komponen akan tampil dalam bahasa Inggris sampai ditambahkan ke `id.js`.
- Sengaja tidak diterjemahkan: nama orang/perusahaan/program, nama tools & teknologi, potongan kode, `alt` gambar, isi PDF dan gambar sertifikat.
- Logika di `behaviors/*` yang membaca teks Inggris memakai `originalText()` dari `src/i18n/translator.js`, jadi tidak terpengaruh terjemahan.

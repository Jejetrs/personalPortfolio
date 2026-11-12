# How I got here: path with checkpoints + "Read my story as"

Dibuat di atas new_portfolio_1.zip. Gaya gelap yang ada tidak diubah.

- `src/pages/home/sections/StoryBand.jsx`: tiap kartu mendapat checkpoint (lingkaran dengan tanda centang) dan garis putus-putus ke kartu berikutnya. Di bawah kartu ada "Read my story as" (Full picture, Business Analysis, Product & Project, UI/UX Design, Developer & Data). Memilih peran menyalakan kartu yang relevan (garis tepi cyan, checkpoint menyala) dan meredupkan yang lain, lalu menampilkan jenis lowongan, yang diminta, bukti dari portofolio, dan "Still growing".
- `src/pages/home/data/storyProfile.js` (baru): isi untuk tiap peran dan peta peran per kartu (2023 dev/pm, 2024 dev/ux, 2025 pm/ba/dev, 2026 ux/pm/ba).
- `src/styles/story.css` (baru): hanya menambah gaya; teks dan gaya kartu lama tidak disentuh.

Di layar lebar garis melengkung mengikuti kartu yang bergantian posisi. Di tablet berupa garis lurus antar kartu, dan di ponsel garis vertikal.
`dist/` adalah build lama: jalankan `npm install` lalu `npm run dev` / `npm run build`, dan biarkan folder `public/` ada.

/*
 * Strings that contain numbers or names, so they cannot be listed one by one in ./id.js.
 * Each entry is [RegExp, (...capturedGroups) => Indonesian text].
 * Captured groups that are themselves dictionary entries are already translated when they reach the builder.
 * Order matters: the first matching pattern wins, so keep the specific ones above the generic ones.
 */

const MONTHS = { January: 'Januari', February: 'Februari', March: 'Maret', May: 'Mei', June: 'Juni', July: 'Juli', August: 'Agustus', October: 'Oktober', December: 'Desember' };
/* Localises full month names and "University of X" inside longer sentences (certificate captions). */
const localizeDate = (text) => text
  .replace(/University of ([A-Z][a-z]+)/g, 'Universitas $1')
  .replace(/\b(January|February|March|May|June|July|August|October|December)\b/g, (m) => MONTHS[m]);

export default [
  [/^Project (\d+)$/, (n) => `Proyek ${n}`],
  [/^Show image (\d+) of (\d+) for (.+)$/, (n, total, name) => `Tampilkan gambar ${n} dari ${total} untuk ${name}`],
  [/^Show image (\d+) of (\d+)$/, (n, total) => `Tampilkan gambar ${n} dari ${total}`],
  [/^Show achievement (\d+)$/, (n) => `Tampilkan pencapaian ${n}`],
  [/^Show Telkom documentation image (\d+)$/, (n) => `Tampilkan gambar dokumentasi Telkom ${n}`],
  [/^Show documentation image (\d+)$/, (n) => `Tampilkan gambar dokumentasi ${n}`],
  [/^Go to certificate (\d+)$/, (n) => `Buka sertifikat ${n}`],
  [/^(\d+) of (\d+) Achievements$/, (n, total) => `${n} dari ${total} Pencapaian`],
  [/^(\d+) visuals?$/, (n) => `${n} visual`],
  [/^FEATURED MOMENT · (\d+) \/ (\d+)$/, (n, total) => `MOMEN PILIHAN · ${n} / ${total}`],
  [/^Project · (.+)$/, (name) => `Proyek · ${name}`],
  [/^Next · (.+)$/, (name) => `Berikutnya · ${name}`],
  [/^View full-screen image: (.+?) at Telkom Indonesia$/, (name) => `Lihat gambar layar penuh: ${name} di Telkom Indonesia`],
  [/^View full-screen image: (.+)$/, (name) => `Lihat gambar layar penuh: ${name}`],
  [/^View details for (.+)$/, (name) => `Lihat detail ${name}`],
  [/^(?:Certificate preview|Preview certificate): (.+)$/, (name) => `Pratinjau sertifikat: ${localizeDate(name)}`],
  [/^Open certificate for (.+)$/, (name) => `Buka sertifikat ${name}`],
  [/^Play video: (.+)$/, (name) => `Putar video: ${name}`],
  [/^Photo pending: (.+)$/, (name) => `Foto menyusul: ${name}`],
  [/^Expand photo: (.+)$/, (name) => `Perbesar foto: ${name}`],
  [/^Enlarge:? (.+)$/, (name) => `Perbesar: ${name}`],
  // Lightbox captions: "<title> at Telkom Indonesia · 3 / 8", "<project> — <slide> · 1 / 10", "<slide> · 1 / 3"
  [/^(.+?) at Telkom Indonesia · (\d+) \/ (\d+)$/, (name, n, total) => `${name} di Telkom Indonesia · ${n} / ${total}`],
  [/^(.+?) — (.+?) · (\d+) \/ (\d+)$/, (project, slide, n, total) => `${project} — ${slide} · ${n} / ${total}`],
  [/^(.+?) · (\d+) \/ (\d+)$/, (name, n, total) => `${name} · ${n} / ${total}`],
  [/^(.+?) — ([^—]+)$/, (project, slide) => `${project} — ${slide}`],
  // Generic verbs last
  [/^Show (.+)$/, (name) => `Tampilkan ${name}`],
  [/^Open (.+)$/, (name) => `Buka ${name}`],
  [/^View (.+)$/, (name) => `Lihat ${name}`],
];

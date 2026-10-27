# misterizii style

Design system untuk semua konten edukasi iziilearning: website, carousel Instagram, Reels/TikTok/Shorts, dan presentasi.
Tema **Langit Malam**: navy yang tenang dan elegan sebagai warna formal, kuning mangga sebagai warna ceria, di atas latar putih yang bersih.

## Warna

| Nama | Hex | Dipakai untuk |
|---|---|---|
| Navy Malam | `#131B3A` | Latar gelap, judul, teks utama |
| Putih Bersih | `#FFFFFF` | Latar terang |
| Kuning Mangga | `#FFB52E` | Satu kata kunci, tombol utama, nomor langkah |
| Kabut Biru | `#EEF2FB` | Latar lembut (kartu, reels terang) |
| Biru Langit | `#5B8DEF` | Pendukung: info, ilustrasi (secukupnya) |
| Hijau Benar | `#22A06B` | Hanya untuk menandai jawaban benar |
| Merah Salah | `#E5484D` | Hanya untuk menandai jawaban salah |

Hijau dan merah bukan warna dekorasi. Keduanya hanya muncul saat sesuatu ditandai benar atau salah, supaya artinya tetap jelas bagi anak.

Aturan sederhana: **satu warna mangga per layar**. Mangga dipakai untuk satu kata yang paling penting dalam cerita, bukan untuk banyak hal sekaligus.

## Font

**Plus Jakarta Sans** (Google Fonts, gratis), dipakai untuk semuanya:

- Judul: tebal (800), jarak huruf sedikit dirapatkan
- Teks: regular (400) atau medium (500)
- Label kecil: bold (700), huruf kapital, jarak huruf dilebarkan

## Ciri khas: "stabilo" mangga

Kata kunci di judul ditandai dengan `<Highlight>`. Di latar terang ia tampil sebagai coretan stabilo mangga, di latar navy sebagai teks mangga.

```tsx
<Heading>3 cara mudah memahami <Highlight>pecahan</Highlight></Heading>
```

## Komponen

| Kelompok | Komponen |
|---|---|
| Dasar | `MzProvider` (tema `light` / `dark`), `Stack` |
| Tipografi | `Heading`, `Text`, `Highlight`, `Eyebrow` |
| Website | `Navbar`, `Button`, `Tag`, `Card`, `Quote`, `StepList` |
| Template konten | `CarouselSlide` (4:5), `ReelsFrame` (9:16), `PresentationSlide` (16:9) |

Template konten menyesuaikan lebar wadahnya. Untuk ekspor ukuran asli, beri lebar 1080px (carousel dan reels) atau 1920px (slide).

## Pemakaian

```tsx
import 'misterizii-style/styles.css';
import { MzProvider, CarouselSlide, Highlight } from 'misterizii-style';

<MzProvider>
  <div style={{ width: 1080 }}>
    <CarouselSlide
      variant="cover"
      eyebrow="Matematika · Kelas 3"
      title={<>3 cara mudah memahami <Highlight>pecahan</Highlight></>}
      body="Pakai pizza, coklat, dan uang jajan."
      page={1}
      total={5}
    />
  </div>
</MzProvider>
```

Token warna tersedia sebagai CSS variables (`--mz-*`, lihat [`src/tokens/tokens.css`](src/tokens/tokens.css)) dan sebagai JSON (`misterizii-style/tokens.json`) untuk alat lain seperti Canva atau Figma. JSON-nya mencakup warna, ukuran huruf, spasi, radius, dan ukuran ekspor tiap kanvas.

## Dipakai di renderer (Remotion, Puppeteer)

Renderer yang menggambar satu frame demi satu frame butuh dua penyesuaian.

**1. Font jangan diambil dari Google Fonts.** Renderer tidak menunggu `@import` selesai, jadi sebagian frame bisa keluar dengan font cadangan. Pakai entri CSS tanpa impor font, lalu muat fontnya sendiri:

```tsx
import 'misterizii-style/styles.base.css';   // bukan styles.css
import { loadFont } from '@remotion/google-fonts/PlusJakartaSans';

loadFont();
```

**2. Matikan transisi CSS.** Renderer tidak punya waktu yang mengalir, jadi `transition` dan `animation` CSS bisa membeku di tengah dan membuat frame yang sama tidak konsisten. Gerakan digerakkan dari penghitung frame renderer, bukan dari CSS:

```tsx
<MzProvider motion="static">
  <ReelsFrame ... />
</MzProvider>
```

`motion="static"` juga tersedia langsung di `CarouselSlide`, `ReelsFrame`, dan `PresentationSlide`.

| Entri CSS | Untuk |
|---|---|
| `misterizii-style/styles.css` | Web — sudah memuat Plus Jakarta Sans dari Google Fonts |
| `misterizii-style/styles.base.css` | Renderer — tanpa impor font, fontnya kamu muat sendiri |

## Pengembangan

```bash
npm ci
npm run storybook   # pratinjau semua komponen di http://localhost:6006
npm run build       # dist/: ESM, CJS, .d.ts, styles.css, tokens.json
```

# misterizii style

Design system untuk semua konten edukasi misterizii: website, carousel Instagram, Reels/TikTok/Shorts, dan presentasi.
Tema **Langit Malam**: navy yang tenang dan elegan sebagai warna formal, kuning mangga sebagai warna ceria, di atas latar putih yang bersih.

## Warna

| Nama | Hex | Dipakai untuk |
|---|---|---|
| Navy Malam | `#131B3A` | Latar gelap, judul, teks utama |
| Putih Bersih | `#FFFFFF` | Latar terang |
| Kuning Mangga | `#FFB52E` | Satu kata kunci, tombol utama, nomor langkah |
| Kabut Biru | `#EEF2FB` | Latar lembut (kartu, reels terang) |
| Biru Langit | `#5B8DEF` | Pendukung: info, ilustrasi (secukupnya) |

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

Token warna tersedia sebagai CSS variables (`--mz-*`, lihat [`src/tokens/tokens.css`](src/tokens/tokens.css)) dan sebagai JSON (`misterizii-style/tokens.json`) untuk alat lain seperti Canva atau Figma.

## Pengembangan

```bash
npm ci
npm run storybook   # pratinjau semua komponen di http://localhost:6006
npm run build       # dist/: ESM, CJS, .d.ts, styles.css, tokens.json
```

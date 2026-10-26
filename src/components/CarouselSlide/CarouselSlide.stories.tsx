import type { Meta, StoryObj } from '@storybook/react';
import { CarouselSlide } from './CarouselSlide';
import { Highlight } from '../Highlight/Highlight';

const meta: Meta<typeof CarouselSlide> = { title: 'Templates/CarouselSlide', component: CarouselSlide };
export default meta;
type Story = StoryObj<typeof CarouselSlide>;

const Pie = () => (
  <svg viewBox="0 0 100 100" width="62%" aria-label="3 dari 8 potong pizza">
    {Array.from({ length: 8 }, (_, i) => {
      const a0 = (i / 8) * Math.PI * 2 - Math.PI / 2;
      const a1 = ((i + 1) / 8) * Math.PI * 2 - Math.PI / 2;
      const d = `M50 50 L${50 + 46 * Math.cos(a0)} ${50 + 46 * Math.sin(a0)} A46 46 0 0 1 ${50 + 46 * Math.cos(a1)} ${50 + 46 * Math.sin(a1)} Z`;
      return <path key={i} d={d} fill={i < 3 ? 'var(--mz-accent)' : 'var(--mz-mist-100)'} stroke="var(--mz-navy-900)" strokeWidth="1.6" />;
    })}
  </svg>
);

export const Series: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 320px))', gap: 16 }}>
      <CarouselSlide variant="cover" eyebrow="Matematika · Kelas 3" title={<>3 cara mudah memahami <Highlight>pecahan</Highlight></>} body="Pakai pizza, coklat, dan uang jajan." page={1} total={5} />
      <CarouselSlide variant="content" number="01" title="Potong pizza jadi 8" body="Kamu makan 3 potong. Berarti kamu makan 3/8 pizza." visual={<Pie />} page={2} total={5} />
      <CarouselSlide variant="closing" title={<>Sekarang kamu sudah <Highlight>paham</Highlight> pecahan!</>} body="Coba jawab di kolom komentar: 2/4 sama dengan berapa?" cta="Simpan & bagikan" page={5} total={5} />
    </div>
  ),
};

export const LightCover: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <CarouselSlide variant="cover" theme="light" eyebrow="Seri Cerita Sains" title={<>Kenapa langit berwarna <Highlight>biru</Highlight>?</>} body="Jawabannya ada pada cahaya matahari." />
    </div>
  ),
};

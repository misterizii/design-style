import type { Meta, StoryObj } from '@storybook/react';
import { ReelsFrame } from './ReelsFrame';
import { Highlight } from '../Highlight/Highlight';

const meta: Meta<typeof ReelsFrame> = { title: 'Templates/ReelsFrame', component: ReelsFrame };
export default meta;
type Story = StoryObj<typeof ReelsFrame>;

const Drop = () => (
  <svg viewBox="0 0 100 120" width="44%" aria-hidden>
    <path d="M50 6C50 6 14 52 14 76a36 36 0 0 0 72 0C86 52 50 6 50 6z" fill="var(--mz-sky-500)" />
    <path d="M34 78a16 16 0 0 0 16 16" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".7" />
  </svg>
);

export const LightAndDark: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 260px))', gap: 16 }}>
      <ReelsFrame hook="Tahukah kamu?" title={<>Air yang kamu minum mungkin pernah diminum <Highlight>dinosaurus</Highlight>.</>} caption="Ini cerita siklus air dalam 30 detik.">
        <Drop />
      </ReelsFrame>
      <ReelsFrame theme="dark" hook="Cerita sains" title={<>Kenapa Bulan tidak <Highlight>jatuh</Highlight> ke Bumi?</>} caption="Karena Bulan sebenarnya sedang jatuh terus-menerus." />
      <ReelsFrame showSafeArea hook="Area aman" title="Teks tetap di luar area merah" caption="Area merah tertutup tombol dan caption aplikasi." />
    </div>
  ),
};

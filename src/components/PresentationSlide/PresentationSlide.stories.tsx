import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PresentationSlide } from './PresentationSlide';
import { Highlight } from '../Highlight/Highlight';
import { Card } from '../Card/Card';

const meta: Meta<typeof PresentationSlide> = { title: 'Templates/PresentationSlide', component: PresentationSlide };
export default meta;
type Story = StoryObj<typeof PresentationSlide>;

const W = ({ children }: { children: ReactNode }) => <div style={{ maxWidth: 720, borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--mz-shadow-md)' }}>{children}</div>;

export const Title: Story = {
  render: () => <W><PresentationSlide layout="title" eyebrow="IPA Kelas 5 · Bab 2" title={<>Perjalanan setetes <Highlight>air</Highlight></>} subtitle="Cerita tentang siklus air yang terjadi setiap hari di sekitar kita." footer="Pak Rizi · SDN 1" page={1} /></W>,
};

export const Split: Story = {
  render: () => (
    <W>
      <PresentationSlide
        layout="split"
        eyebrow="Bab 2 · IPA Kelas 5"
        title="Siklus Air"
        subtitle="Perjalanan setetes air dari laut, ke awan, lalu kembali lagi."
        points={['Evaporasi: air laut menguap karena panas matahari', 'Kondensasi: uap air berkumpul menjadi awan', 'Presipitasi: awan turun sebagai hujan']}
        page={4}
      />
    </W>
  ),
};

export const Statement: Story = {
  render: () => <W><PresentationSlide layout="statement" eyebrow="Pertanyaan hari ini" title={<>Ke mana perginya genangan air <Highlight>setelah hujan</Highlight>?</>} page={2} /></W>,
};

export const Content: Story = {
  render: () => (
    <W>
      <PresentationSlide layout="content" eyebrow="Rangkuman" title="Tiga tahap siklus air" page={7}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.6cqw' }}>
          <Card tone="soft" padding="sm" title="Evaporasi">Air menguap</Card>
          <Card tone="soft" padding="sm" title="Kondensasi">Awan terbentuk</Card>
          <Card tone="soft" padding="sm" title="Presipitasi">Hujan turun</Card>
        </div>
      </PresentationSlide>
    </W>
  ),
};

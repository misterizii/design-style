import type { Meta, StoryObj } from '@storybook/react';
import { StepList } from './StepList';

const meta: Meta<typeof StepList> = { title: 'Website/StepList', component: StepList };
export default meta;
type Story = StoryObj<typeof StepList>;

const items = [
  { title: 'Evaporasi', description: 'Air laut menguap karena panas matahari.' },
  { title: 'Kondensasi', description: 'Uap air mendingin dan berkumpul menjadi awan.' },
  { title: 'Presipitasi', description: 'Awan yang berat turun sebagai hujan.' },
];

export const Default: Story = { render: () => <div style={{ maxWidth: 420 }}><StepList items={items} /></div> };
export const Large: Story = { render: () => <div style={{ maxWidth: 480 }}><StepList size="lg" items={items} /></div> };

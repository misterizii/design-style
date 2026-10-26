import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof Text> = { title: 'Typography/Text', component: Text, args: { children: 'Air laut menguap karena panas matahari, lalu naik menjadi uap.' } };
export default meta;
type Story = StoryObj<typeof Text>;

export const Variants: Story = {
  render: () => (
    <Stack gap={3} style={{ maxWidth: 560 }}>
      <Text size="lg" weight="medium">Suatu pagi, Dika bertanya kepada ibunya: "Bu, ke mana perginya genangan air setelah hujan?"</Text>
      <Text>Air laut menguap karena panas matahari, lalu naik menjadi uap. Di langit yang dingin, uap itu berkumpul menjadi awan.</Text>
      <Text size="sm" tone="muted">Sumber: Buku IPA Kelas 5, Bab 2.</Text>
      <Text size="xs" tone="muted" weight="bold">Waktu baca 3 menit</Text>
    </Stack>
  ),
};

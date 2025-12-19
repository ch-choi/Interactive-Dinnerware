import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta = {
    title: 'Components/UI/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: '1',
        name: 'Terracotta Dinner Plate',
        price: 32.00,
        category: 'Plates',
        image: 'https://images.unsplash.com/photo-1621644026830-22c6085a6a43?q=80&w=600&auto=format&fit=crop', // Temporary Unsplash Image
        isNew: false,
    },
};

export const WithNewBadge: Story = {
    args: {
        ...Default.args,
        name: 'Sage Serving Bowl',
        price: 45.00,
        category: 'Bowls',
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop',
        isNew: true,
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
    title: 'Components/UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline', 'ghost', 'link', 'terracotta'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
        }
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Explore Collection',
        variant: 'default',
    },
};

export const Outline: Story = {
    args: {
        children: 'View Details',
        variant: 'outline',
    },
};

export const Terracotta: Story = {
    args: {
        children: 'Add to Cart',
        variant: 'terracotta',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Read More',
        variant: 'ghost',
    },
};

export const Large: Story = {
    args: {
        children: 'Shop Now',
        size: 'lg',
        variant: 'default',
    },
};

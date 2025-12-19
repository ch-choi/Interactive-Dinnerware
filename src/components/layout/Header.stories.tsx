import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
    title: 'Components/Layout/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ScrolledState: Story = {
    decorators: [
        (Story) => (
            <div style={{ height: '200vh', paddingTop: '100px' }}>
                <p className="text-center p-4">Scroll down to see the header change styling</p>
                <Story />
            </div>
        ),
    ],
};

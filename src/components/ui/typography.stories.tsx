import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Text } from './typography';

const meta = {
    title: 'Components/UI/Typography',
    component: Heading, // Default component for the meta, but we'll showcase both
    tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

export const Headings: StoryObj = {
    render: () => (
        <div className="space-y-4">
            <Heading level="h1">Heading 1: Palmer Dinnerware</Heading>
            <Heading level="h2">Heading 2: The Collection</Heading>
            <Heading level="h3">Heading 3: Sensory Experience</Heading>
            <Heading level="h4">Heading 4: Product Details</Heading>
        </div>
    ),
};

export const Texts: StoryObj = {
    render: () => (
        <div className="space-y-4 max-w-lg">
            <Text size="xl">
                This is extra large text, often used for lead paragraphs or introductions.
            </Text>
            <Text size="lg">
                Large text for emphasis. The quick brown fox jumps over the lazy dog.
            </Text>
            <Text size="default">
                Default body text. Palmer dinnerware is designed to elevate every dining experience, turning meals into celebrations.
            </Text>
            <Text size="sm">
                Small text for captions or secondary information.
            </Text>
        </div>
    ),
};

export const Alignment: StoryObj = {
    render: () => (
        <div className="space-y-4 w-full">
            <Heading level="h2" align="left">Left Aligned</Heading>
            <Heading level="h2" align="center">Center Aligned</Heading>
            <Heading level="h2" align="right">Right Aligned</Heading>
        </div>
    ),
};

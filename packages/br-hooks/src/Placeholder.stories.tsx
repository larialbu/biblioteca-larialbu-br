import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const Placeholder = () => <div style={{ padding: '2rem', textAlign: 'center' }}>Placeholder story for package components</div>;

export default {
  title: 'Placeholder',
  component: Placeholder,
} as Meta<typeof Placeholder>;

type Story = StoryObj<typeof Placeholder>;
export const Default: Story = {};

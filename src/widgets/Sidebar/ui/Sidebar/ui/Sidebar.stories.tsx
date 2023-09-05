// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '../../../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../../../app/providers/ThemeProvider/lib/ThemeContext';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const StorySidebarTemplate: Story = {
  render: (args) => <Sidebar {...args} />,
};

export const Light: Story = {
  ...StorySidebarTemplate,
};

export const Dark: Story = {
  ...StorySidebarTemplate,
  decorators: [ThemeDecorator(Theme.DARK)],
};

// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

const StoryAppLinkTemplate: Story = {
  render: (args) => <Navbar {...args} />,
};

export const Light: Story = {
  ...StoryAppLinkTemplate,
};

export const Dark: Story = {
  ...StoryAppLinkTemplate,
  decorators: [ThemeDecorator(Theme.DARK)],
};

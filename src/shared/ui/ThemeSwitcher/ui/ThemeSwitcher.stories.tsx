// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

const StoryLoaderTemplate: Story = {
  render: (args) => <ThemeSwitcher {...args} />,
};

const DarkThemeDecorator: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Light: Story = StoryLoaderTemplate;

export const Dark: Story = {
  ...StoryLoaderTemplate,
  ...DarkThemeDecorator,
};

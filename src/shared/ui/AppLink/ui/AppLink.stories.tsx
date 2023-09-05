// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  args: {
    to: '/',
  },
  component: AppLink,
};

export default meta;

type Story = StoryObj<typeof AppLink>;

const StoryAppLinkTemplate: Story = {
  render: (args) => <AppLink {...args} />,
};

const DarkThemeDecorator: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Primary: Story = {
  ...StoryAppLinkTemplate,
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Primary Link',
  },
};

export const PrimaryDark: Story = {
  ...Primary,
  ...DarkThemeDecorator,
};

export const Secondary: Story = {
  ...StoryAppLinkTemplate,
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Secondary Link',
  },
};

export const SecondaryDark: Story = {
  ...Secondary,
  ...DarkThemeDecorator,
};

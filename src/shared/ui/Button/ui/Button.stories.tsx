// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'shared/ui/Button';

import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator';
import { Theme } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const StoryButtonTemplate: Story = {
  render: (args) => <Button {...args} />,
};

const DarkThemeDecorator: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Primary: Story = {
  ...StoryButtonTemplate,
  args: {
    theme: 'primary',
    children: 'Primary Button',
  },
};

export const PrimaryDark: Story = {
  ...Primary,
  ...DarkThemeDecorator,
};

export const Clear: Story = {
  ...StoryButtonTemplate,
  args: {
    theme: 'clear',
    children: 'Clear Button',
  },
};

export const ClearDark: Story = {
  ...Clear,
  ...DarkThemeDecorator,
};

export const Outline: Story = {
  ...StoryButtonTemplate,
  args: {
    theme: 'outline',
    children: 'Outline Button',
  },
};

export const OutlineDark: Story = {
  ...Outline,
  ...DarkThemeDecorator,
};

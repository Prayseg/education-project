// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

const StoryLoaderTemplate: Story = {
  render: (args) => <Loader {...args} />,
};

const DarkThemeDecorator: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Light: Story = StoryLoaderTemplate;

export const Dark: Story = {
  ...StoryLoaderTemplate,
  ...DarkThemeDecorator,
};

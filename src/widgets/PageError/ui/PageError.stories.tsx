// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
};

export default meta;

type Story = StoryObj<typeof PageError>;

const StoryAppLinkTemplate: Story = {
  render: (args) => <PageError {...args} />,
};

export const Light: Story = {
  ...StoryAppLinkTemplate,
};

export const Dark: Story = {
  ...StoryAppLinkTemplate,
  decorators: [ThemeDecorator(Theme.DARK)],
};

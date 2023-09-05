// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

const StoryAboutPageTemplate: Story = {
  render: () => <NotFoundPage />,
};

export const Light: Story = {
  ...StoryAboutPageTemplate,
};

export const Dark: Story = {
  ...StoryAboutPageTemplate,
  decorators: [ThemeDecorator(Theme.DARK)],
};

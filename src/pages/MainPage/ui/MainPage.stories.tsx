// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;

const StoryMainPageTemplate: Story = {
  render: () => <MainPage />,
};

export const Light: Story = {
  ...StoryMainPageTemplate,
};

export const Dark: Story = {
  ...StoryMainPageTemplate,
  decorators: [ThemeDecorator(Theme.DARK)],
};

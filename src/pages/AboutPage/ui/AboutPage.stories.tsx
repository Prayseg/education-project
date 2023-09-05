// AppLink.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

const StoryAboutPageTemplate: Story = {
  render: () => <AboutPage />,
};

export const Light: Story = {
  ...StoryAboutPageTemplate,
};

export const Dark: Story = {
  ...StoryAboutPageTemplate,
  decorators: [ThemeDecorator(Theme.DARK)],
};

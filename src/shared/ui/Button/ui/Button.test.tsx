import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button component', () => {
  test('button rendered successfully', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('default button', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('primary');
  });
  test('button with a clear theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByRole('button')).toHaveClass('clear');
  });
  test('button has correct text', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByRole('button')).toHaveClass('clear');
  });
});

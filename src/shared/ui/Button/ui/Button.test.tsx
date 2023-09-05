import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('button component', () => {
  test('button rendered successfully', () => {
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('default button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('primary');
  });
  test('button with a clear theme', () => {
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByRole('button')).toHaveClass('clear');
  });
  test('button has correct text', () => {
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByRole('button')).toHaveClass('clear');
  });
});

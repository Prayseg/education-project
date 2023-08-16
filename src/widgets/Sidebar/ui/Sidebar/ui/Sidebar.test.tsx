import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib';
import { Sidebar } from './Sidebar';

describe('Sidebar component', () => {
  test('render test', () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);

    const sidebarToggleBtn = screen.getByTestId('sidebar-toggle-btn');

    fireEvent.click(sidebarToggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

    fireEvent.click(sidebarToggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});

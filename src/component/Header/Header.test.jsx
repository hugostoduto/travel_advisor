import { screen, render } from '@testing-library/react';

import React from 'react';
import { Header } from './Header';

describe('< />', () => {
  it('should render', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});

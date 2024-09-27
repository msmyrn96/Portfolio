import React from 'react';
import { render, screen, within } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';

test('should render list of 4 experience points', () => {
    const { getByTestId } = render(<HeaderComponent />);
    const list = getByTestId('header-list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(5);
});

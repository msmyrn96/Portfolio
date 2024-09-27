import React from 'react';
import { render, screen, within } from '@testing-library/react';
import AboutComponent from './AboutComponent';

test('should render list of 7 info points', () => {
    const { getByTestId } = render(<AboutComponent />);
    const list = getByTestId('about-list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(7);
});

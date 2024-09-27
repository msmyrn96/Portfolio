import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ExperienceComponent from './ExperienceComponent';

test('should render list of 4 experience points', () => {
    const { getByTestId } = render(<ExperienceComponent />);
    const list = getByTestId('experience-list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
});

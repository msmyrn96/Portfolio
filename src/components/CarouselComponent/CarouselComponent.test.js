import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import CarouselComponent from './CarouselComponent';

// Mock data for the Carousel component
const items = [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }];

describe('Carousel Component', () => {
    test('should change state when the right arrow is clicked', () => {
        render(<CarouselComponent items={items} />);

        // Get the right button
        const rightButton = screen.getByTestId('right-button');

        // Verify the initial item is rendered
        expect(screen.getByText('test1')).toBeInTheDocument();

        // Click the right button (move to the next item)
        fireEvent.click(rightButton);

        // Check if the next item is now displayed
        expect(screen.getByText('test2')).toBeInTheDocument();
    });

    test('should change state when the left arrow is clicked', () => {
        render(<CarouselComponent items={items} />);

        // Get the right button
        const leftButton = screen.getByTestId('left-button');

        // Verify the initial item is rendered
        expect(screen.getByText('test1')).toBeInTheDocument();

        // Click the right button (move to the previous item)
        fireEvent.click(leftButton);

        // Check if the previous item is now displayed
        expect(screen.getByText('test3')).toBeInTheDocument();
    });
});

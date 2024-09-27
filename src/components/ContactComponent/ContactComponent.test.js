import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactComponent from './ContactComponent';

describe('ContactComponent', () => {
    test('should display validation errors if form is incomplete', async () => {
        const { getByTestId } = render(<ContactComponent />);
        const submitButton = getByTestId('submit-button');
        const nameInput = getByTestId('name-input');
        const emailInput = getByTestId('email-input');

        // Try to submit the form without filling any fields
        fireEvent.click(submitButton);

        expect(nameInput).toBeInvalid();

        nameInput.value = 'test';

        // Try to submit the form without filling any fields
        fireEvent.click(submitButton);

        expect(emailInput).toBeInvalid();
    });
});

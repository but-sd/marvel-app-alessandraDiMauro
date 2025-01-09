import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DisplayDate } from './DisplayDate';

describe('DisplayDate', () => {
    test('renders the formatted date correctly', () => {
        const date = '2023-10-10T00:00:00Z';
        render(<DisplayDate date={date} />);
        
        // Check if the formatted date is displayed
        const formattedDate = screen.getByText('Oct 10, 2023');
        expect(formattedDate).toBeInTheDocument();
    });

    test('handles invalid dates gracefully', () => {
        const invalidDate = 'invalid-date';
        render(<DisplayDate date={invalidDate} />);
        
        // Check if the component handles invalid dates gracefully
        // This will depend on how you want to handle invalid dates in your component
        // For example, you might want to display an error message or a default date
        // Here, we assume it displays "Invalid Date"
        const errorMessage = screen.getByText('Invalid Date');
        expect(errorMessage).toBeInTheDocument();
    });
});
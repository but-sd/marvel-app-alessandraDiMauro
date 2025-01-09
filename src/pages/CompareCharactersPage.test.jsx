import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useLoaderData } from 'react-router';
import CompareCharactersPage from './CompareCharactersPage';

// Mock the useLoaderData hook
jest.mock('react-router', () => ({
    useLoaderData: jest.fn(),
}));


describe('CompareCharactersPage', () => {
    const characters = [
        {
            name: 'Character 1',
            capacities: {
                force: 10,
                intelligence: 8,
                durability: 7,
                energy: 6,
                speed: 5,
                fighting: 4,
            },
        },
        {
            name: 'Character 2',
            capacities: {
                force: 9,
                intelligence: 7,
                durability: 6,
                energy: 5,
                speed: 4,
                fighting: 3,
            },
        },
    ];

    beforeEach(() => {
        useLoaderData.mockReturnValue(characters);
    });

    test('render CompareCharactersPage component', () => {
        render(<CompareCharactersPage />);
        expect(document.title).toBe('Compare | Marvel App');

        const headingElement = screen.getByRole('heading', { level: 2, name: 'Compare characters' });
        expect(headingElement).toBeInTheDocument();

        const selectElements = screen.getAllByRole('combobox');
        expect(selectElements).toHaveLength(2);

        
        const optionElement1 = screen.getByTestId('select-character-1');
        expect(optionElement1).toBeInTheDocument();
        expect(optionElement1).toHaveValue('0');

        const optionElement2 = screen.getByTestId('select-character-2');
        expect(optionElement2).toBeInTheDocument();
        expect(optionElement2).toHaveValue('1');

        // expect to a an div with class "recharts-wrapper"
        expect(document.querySelector('.recharts-wrapper')).toBeInTheDocument();
    });

    test('render CompareCharactersPage component when the select changes', async () => {
        render(<CompareCharactersPage />);
        const selectElements = screen.getAllByRole('combobox');
        expect(selectElements).toHaveLength(2);

        const optionElement1 = screen.getByTestId('select-character-1');
        expect(optionElement1).toBeInTheDocument();
        expect(optionElement1).toHaveValue('0');

        const optionElement2 = screen.getByTestId('select-character-2');
        expect(optionElement2).toBeInTheDocument();
        expect(optionElement2).toHaveValue('1');

        // change the first select value
        fireEvent.change(optionElement1, { target: { value: '1' } });
        expect(optionElement1).toHaveValue('1');

        // change the second select value
        fireEvent.change(optionElement2, { target: { value: '0' } });
        expect(optionElement2).toHaveValue('0');
    });
});
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CharactersList } from './CharactersList';

describe('CharactersList', () => {

    test('renders an empty list when no characters are provided', () => {
        render(<BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true}}><CharactersList /></BrowserRouter>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeEmptyDOMElement();
    });

    test('renders an empty list when characters is empty', () => {
        render(<BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true}}><CharactersList characters={[]}/></BrowserRouter>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeEmptyDOMElement();
    });

    test('renders the correct number of list items when characters are provided', () => {
        const characters = [
            { id: '1', name: 'Thor' },
            { id: '2', name: 'Captain America' },
        ];
        render(<BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true}}><CharactersList characters={characters}/></BrowserRouter>);
        
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(characters.length);

        characters.forEach(character => {
            const linkElement = screen.getByText(character.name);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement.closest('a')).toHaveAttribute('href', `/characters/${character.id}`);
        });
    });

});
import { render, screen, fireEvent } from '@testing-library/react';
import Compare2CharactersPage from './Compare2CharactersPage';
import { getCharacters } from '../api/characters-api';

jest.mock('../api/characters-api');

describe('Compare2CharactersPage', () => {
    beforeEach(() => {
        getCharacters.mockReturnValue([
            { name: 'Iron Man', strength: 85 },
            { name: 'Captain America', strength: 70 },
        ]);
    });

    test('renders comparison page', () => {
        render(<Compare2CharactersPage />);
        expect(screen.getByText('Comparez deux personnages')).toBeInTheDocument();
    });

    test('updates table on character selection', () => {
        render(<Compare2CharactersPage />);
        const select1 = screen.getByTestId('select-character-1');
        fireEvent.change(select1, { target: { value: '1' } });
        expect(screen.getByText('Captain America')).toBeInTheDocument();
    });
});

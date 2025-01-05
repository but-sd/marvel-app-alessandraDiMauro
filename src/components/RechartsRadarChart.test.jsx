import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MyRadarChart from './RechartsRadarChart';

describe('MyRadarChart', () => {
    const character1 = {
        name: 'Character 1',
        capacities: {
            force: 10,
            intelligence: 8,
            durability: 7,
            energy: 6,
            speed: 5,
            fighting: 4,
        },
    };

    const character2 = {
        name: 'Character 2',
        capacities: {
            force: 9,
            intelligence: 7,
            durability: 6,
            energy: 5,
            speed: 4,
            fighting: 3,
        },
    };

    test('renders MyRadarChart', () => {
        render(<MyRadarChart character1={character1} character2={character2} />);
        // expect to have a div with the class "recharts-wrapper"
        expect(document.querySelector('.recharts-wrapper')).toBeInTheDocument();
    });
});
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from 'recharts';

export default function MyRadarChart(props) {
    const {
        character1,
        character2
    } = props;

    // transform the data to the format expected by the chart
    const data = [
        {
            subject: 'Force',
            A: character1.capacities?.force || 0,
            B: character2.capacities?.force || 0,
        },
        {
            subject: 'Intelligence',
            A: character1.capacities?.intelligence || 0,
            B: character2.capacities?.intelligence || 0,
        },
        {
            subject: 'Durability',
            A: character1.capacities?.durability || 0,
            B: character2.capacities?.durability || 0,
        },
        {
            subject: 'Energy',
            A: character1.capacities?.energy || 0,
            B: character2.capacities?.energy || 0,
        },
        {
            subject: 'Speed',
            A: character1.capacities?.speed || 0,
            B: character2.capacities?.speed || 0,
        },
        {
            subject: 'Fighting skills',
            A: character1.capacities?.fighting || 0,
            B: character2.capacities?.fighting || 0,
        }
    ];

    return (
        <RadarChart id='radar-chart'  cx={250} cy={250} outerRadius={150} width={500} height={500} data={data} >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject"  />
            <PolarRadiusAxis />
            <Tooltip  />
            <Legend />
            <Radar name={character1.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name={character2.name} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        </RadarChart>
    );
}
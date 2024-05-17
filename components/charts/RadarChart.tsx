import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const RadarChartComponent = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: ['Inteligencia', 'Fuerza', 'Velocidad', 'Durabilidad', 'Poder', 'Combate'],
    datasets: [
      {
        label: 'Rick Sanchez',
        data: [100, 80, 90, 100, 100, 95],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Morty Smith',
        data: [50, 30, 40, 60, 20, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={chartData} />;
};

export default RadarChartComponent;
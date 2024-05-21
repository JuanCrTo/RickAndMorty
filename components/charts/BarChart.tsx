import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChartComponent = () => {
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
    labels: characters.map((character) => character.name),
    datasets: [
      {
        label: 'Episodios',
        data: characters.map((character) => character.episode.length),
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
      },
      {
        label: 'IQ',
        data: [100, 50, 60, 70, 30, 55, 65, 85, 60, 65, 90, 40, 25, 50, 85, 55, 60, 50, 80, 20],
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
      }
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxRotation: 90, // Rotar las etiquetas del eje X para evitar superposiciones
          minRotation: 90,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options}/>;
};

export default BarChartComponent;
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChartComponent = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const data = await response.json();
      setEpisodes(data.results);
    };

    fetchData();
  }, []);

  const seasons = Array.from(new Set(episodes.map((episode) => episode.episode.split('E')[0])));
  const chartData = {
    labels: seasons,
    datasets: [
      {
        label: 'Episodios por temporada',
        data: seasons.map((season) => episodes.filter((episode) => episode.episode.startsWith(season)).length),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChartComponent;
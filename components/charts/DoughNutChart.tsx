import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ICharacter } from "@/interfaces/Character.interface";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchData();
  }, []);

  const statusCount = characters.reduce<Record<string, number>>(
    (acc, character) => {
      const { status } = character;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    {}
  );

  const chartData = {
    labels: Object.keys(statusCount),
    datasets: [
      {
        data: Object.values(statusCount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default DoughnutChartComponent;

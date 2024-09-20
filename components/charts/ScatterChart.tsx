import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ICharacter } from "@/interfaces/Character.interface";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterChartComponent = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchData();
  }, []);

  const chartData = {
    labels: characters.map((character) => character.name),
    datasets: [
      {
        label: "Personajes",
        data: characters.map((character) => ({
          x: character.episode.length,
          y: character.id,
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Scatter data={chartData} />;
};

export default ScatterChartComponent;

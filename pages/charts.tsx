import React from "react";
import BarChartComponent from "@/components/charts/BarChart";
import LineChartComponent from "@/components/charts/LineChart";
import PieChartComponent from "@/components/charts/PieChart";
import DoughnutChartComponent from "@/components/charts/DoughNutChart";
import PolarAreaChartComponent from "@/components/charts/PolarAreaChart";
import RadarChartComponent from "@/components/charts/RadarChart";
import ScatterChartComponent from "@/components/charts/ScatterChart";
import BubbleChartComponent from "@/components/charts/BubbleChart";
import { Divider } from "antd";
import BotonMain from "@/components/buttons/BotonMain";
import Link from "next/link";
import styles from "@/styles/charts.module.scss";

const charts = () => {
  return (
    <div>
      <div>
        <Link href={`/`}>
          <BotonMain />
        </Link>
      </div>

      <div className={styles.chartGrid}>
        <div className={styles.chartBox}>
          <h1>1. Bar</h1>
          <div className={styles.chartContainer}>
            <BarChartComponent />
          </div>
          <p>
            Esta gráfica de barras muestra una comparación entre los diferentes
            personajes de Rick and Morty. Cada barra representa a un personaje
            específico, y la altura de la barra indica la cantidad de episodios
            en los que ese personaje ha aparecido.
          </p>
          <Divider className={styles.divider} />
        </div>

        <div className={styles.chartBox}>
          <h1>2. Line</h1>
          <div className={styles.chartContainer}>
            <LineChartComponent />
          </div>
          <p>
            Esta gráfica de líneas representa el número de episodios por
            temporada en Rick and Morty. El eje horizontal muestra las
            diferentes temporadas, y el eje vertical indica la cantidad de
            episodios.
          </p>
          <Divider className={styles.divider} />
        </div>

        <div className={styles.chartBox}>
          <h1>3. Pie</h1>
          <div className={styles.chartContainer}>
            <PieChartComponent />
          </div>
          <p>
            Esta es una gráfica circular que muestra la distribución de
            personajes según su especie en Rick and Morty.
          </p>
          <Divider className={styles.divider} />
        </div>

        <div className={styles.chartBox}>
          <h1>4. DoughNut</h1>
          <div className={styles.chartContainer}>
            <DoughnutChartComponent />
          </div>
          <p>
            Esta gráfica de rosquilla muestra la distribución de personajes por
            su estado (vivo, muerto, desconocido).
          </p>
          <Divider className={styles.divider} />
        </div>

        <div className={styles.chartBox}>
          <h1>5. PolarArea</h1>
          <div className={styles.chartContainer}>
            <PolarAreaChartComponent />
          </div>
          <p>
            Esta gráfica polar muestra la distribución de personajes por género.
          </p>
          <Divider className={styles.divider} />
        </div>

        <div className={styles.chartBox}>
          <h1>6. Radar</h1>
          <div className={styles.chartContainer}>
            <RadarChartComponent />
          </div>
          <p>
            Esta gráfica de radar compara diferentes atributos de los personajes,
            como inteligencia, fuerza, velocidad, etc.
          </p>
          <Divider className={styles.divider} />
        </div>

        <div className={styles.chartBox}>
          <h1>7. Scatter</h1>
          <div className={styles.chartContainer}>
            <ScatterChartComponent />
          </div>
          <p>
            Esta gráfica de dispersión muestra la relación entre dos variables
            de los personajes, como el número de episodios y la dimensión de
            origen.
          </p>
          <Divider className={styles.divider} />
        </div>

        <div className={styles.chartBox}>
          <h1>8. Bubble</h1>
          <div className={styles.chartContainer}>
            <BubbleChartComponent />
          </div>
          <p>
            Esta gráfica de burbuja muestra la relación entre dos variables de
            los personajes.
          </p>
          <Divider className={styles.divider} />
        </div>
      </div>
    </div>
  );
};

export default charts;

import React from "react";
import BarChartComponent from "@/components/charts/BarChart";
import LineChartComponent from "@/components/charts/LineChart";
import PieChartComponent from "@/components/charts/PieChart";
import DoughnutChartComponent from "@/components/charts/DoughNutChart";
import { PolarArea } from "react-chartjs-2";
import PolarAreaChartComponent from "@/components/charts/PolarAreaChart";
import RadarChartComponent from "@/components/charts/RadarChart";
import ScatterChartComponent from "@/components/charts/ScatterChart";
import BubbleChartComponent from "@/components/charts/BubbleChart";
import { Divider } from "antd";
import BotonMain from "@/components/buttons/BotonMain";
import Link from "next/link";

const charts = () => {
  return (
    <div>
      <div>
        <Link href={`/`}>
          <BotonMain />
        </Link>
      </div>

      <div className="chart-grid">
        <div>
          <h1>1. Bar</h1>
          <div className="chart-container">
            <BarChartComponent />
          </div>
          <p>
            Esta gráfica de barras muestra una comparación entre los diferentes
            personajes de Rick and Morty. Cada barra representa a un personaje
            específico, y la altura de la barra indica la cantidad de episodios
            en los que ese personaje ha aparecido. Cuanto más alta sea la barra,
            más episodios ha tenido ese personaje. Las etiquetas en el eje
            horizontal son los nombres de los personajes.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>

        <div>
          <h1>2. Line</h1>
          <div className="chart-container">
            <LineChartComponent />
          </div>
          <p>
            Esta gráfica de líneas representa el número de episodios por
            temporada en Rick and Morty. El eje horizontal muestra las
            diferentes temporadas, y el eje vertical indica la cantidad de
            episodios. Cada punto en la línea corresponde a una temporada, y su
            altura representa el número de episodios en esa temporada. Esta
            gráfica permite ver fácilmente las fluctuaciones en la cantidad de
            episodios entre temporadas.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>

        <div>
          <h1>3. Pie</h1>
          <div className="chart-container">
            <PieChartComponent />
          </div>
          <p>
            Esta es una gráfica circular o de pastel que muestra la distribución
            de personajes según su especie en Rick and Morty. Cada porción del
            círculo representa una especie diferente, y el tamaño de cada
            porción es proporcional al número de personajes de esa especie. Esto
            permite visualizar rápidamente cuáles son las especies más
            representadas en la serie.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>

        <div>
          <h1>4. DoughNut</h1>
          <div className="chart-container">
            <DoughnutChartComponent />
          </div>
          <p>
            Al igual que la gráfica de pastel, esta gráfica de rosquilla muestra
            la distribución de personajes, pero en este caso se basa en su
            estado (vivo, muerto, desconocido). Cada anillo del rosquilla
            corresponde a un estado diferente, y su tamaño es proporcional al
            número de personajes en ese estado. Esto brinda una visión general
            de la composición de los personajes según su estado.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>

        <div>
          <h1>5. PolarArea</h1>
          <div className="chart-container">
            <PolarAreaChartComponent />
          </div>
          <p>
            Esta gráfica polar es similar a la de rosquilla, pero en lugar de
            representar el estado, muestra la distribución de personajes por
            género. Cada sección del círculo corresponde a un género (masculino,
            femenino, etc.), y su tamaño es proporcional al número de personajes
            de ese género. Esto permite comparar visualmente la representación
            de los diferentes géneros en la serie.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>

        <div>
          <h1>6. Radar</h1>
          <div className="chart-container">
            <RadarChartComponent />
          </div>
          <p>
            Esta gráfica de radar compara diferentes atributos de los
            personajes, como inteligencia, fuerza, velocidad, etc. Cada eje
            representa un atributo, y la forma del gráfico muestra el nivel de
            cada atributo para un personaje o grupo de personajes. Esto permite
            visualizar fácilmente las fortalezas y debilidades de los personajes
            en términos de sus habilidades.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>

        <div>
          <h1>7. Scatter</h1>
          <div className="chart-container">
            <ScatterChartComponent />
          </div>
          <p>
            Esta gráficas de dispersión muestra la relación entre dos variables
            diferentes de los personajes, como el número de episodios y el ID, o
            el número de episodios y la dimensión de origen. Cada punto o
            burbuja representa un personaje, y su posición en el gráfico indica
            los valores de las variables para ese personaje. Esta gráfica puede
            revelar patrones o agrupaciones interesantes entre los personajes.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>

        <div>
          <h1>8. Bubble</h1>
          <div className="chart-container">
            <BubbleChartComponent />
          </div>
          <p>
            Esta gráfica de burbuja muestran la relación entre dos variables
            diferentes de los personajes, como el número de episodios y el ID, o
            el número de episodios y la dimensión de origen. Cada punto o
            burbuja representa un personaje, y su posición en el gráfico indica
            los valores de las variables para ese personaje. Esta gráfica puede
            revelar patrones o agrupaciones interesantes entre los personajes.
          </p>
          <Divider
            style={{
              borderColor: "#2453eb",
            }}
          ></Divider>
        </div>
      </div>
    </div>
  );
};

export default charts;

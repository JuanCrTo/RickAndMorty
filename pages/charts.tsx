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

const charts = () => {
  return (
    <div>
      <h1>1. Barras</h1>
      <BarChartComponent />
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>

      <h1>2. Lineas</h1>
      <LineChartComponent />
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>

      <h1>3. Tarta</h1>
      <PieChartComponent />
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>

      <h1>4. DoughNut</h1>
      <DoughnutChartComponent />
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>

      <h1>5. PolarArea</h1>
      <PolarAreaChartComponent/>
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>

      <h1>6. Radar</h1>
      <RadarChartComponent />
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>

      <h1>7. Scatter</h1>
      <ScatterChartComponent />
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>

      <h1>8. Bubble</h1>
      <BubbleChartComponent />
      <Divider
        style={{
          borderColor: "#2453eb",
        }}
      ></Divider>
    </div>
  );
};

export default charts;

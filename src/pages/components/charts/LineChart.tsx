import { border } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  ArcElement,
  LineOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line, Scatter, Bubble } from "react-chartjs-2";

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "rgba(47, 97, 68, 1)",
      fill: "start",
      backgroundColor: "rgba(47, 97, 68, 0.3)",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
};
export function LineChart() {
  const data = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
      },
    ],
  };

  return (
    <>
      <Line data={data} width={100} height={40} options={options}></Line>
    </>
  );
}

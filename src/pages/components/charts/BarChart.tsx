import { Bar } from "react-chartjs-2";


export function BarChart() {
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
        label: "Bruto",
        borderRadius: 30,
        data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4],
        background: "rgba(32, 214, 155, 1)",
        barThickness: 10,
      },
      {
        label: "Líquido",
        borderRadius: 20,
        data: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4],
        backgroundColor: "rgba(1, 98, 255, 1)",
        barThickness: 10,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Sales Report",
          display: true,
          color: "#000",
          font: {
            size: 18,
          },
        },
      },
    },
    scale: {
      xAxis: {
        display: false,
      },
      yAxis: {
        max: 1,
      },
    },
    elements: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
  };
  return (
    <>
      <Bar data={data} height={300} options={options}></Bar>
    </>
  );
}

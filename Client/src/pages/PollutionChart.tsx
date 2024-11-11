import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { germanData } from "../data/europe/germanData";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = germanData.map((data) => data.date);
const dataValue = germanData.map((data) => data.value);

const LineChart = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Air Quality in Germany",
        data: dataValue,
        fill: false,
        borderColor: "#B52828",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: "PM2.5 values Over Time in Germany",
        font: {
          size: 30,
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "PM2.5",
          font: {
            size: 18,
          },
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="box-container">
        <section className="chart-container">
          <div className="line-chart">
            <h2>Chart</h2>
            <Line data={data} options={options} />
          </div>
        </section>
      </div>
    </>
  );
};

export default LineChart;

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { formatDate } from "../../utils/convertUnits";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "white";
defaults.color = "white";
const LineChart = ({ points }) => {
  if (!points || points.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  console.log(points.ele);

  const chartData = {
    labels: points.map((point) => formatDate(point.time)),
    datasets: [
      {
        label: "Elevation",
        data: points.map((point) => point.ele),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        color: "#ffff",
      },
    ],
  };

  return (
    <div className="min-w-[58vw] h-[26rem] p-1">
      <Line
        data={chartData}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          plugins: { title: { text: "ELEVATION" } },
        }}
      />
    </div>
  );
};

export default LineChart;

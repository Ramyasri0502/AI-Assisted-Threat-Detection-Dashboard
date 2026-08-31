import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function AttackChart() {

  const data = [
    { day: "Mon", attacks: 20 },
    { day: "Tue", attacks: 35 },
    { day: "Wed", attacks: 25 },
    { day: "Thu", attacks: 50 },
    { day: "Fri", attacks: 40 },
    { day: "Sat", attacks: 60 }
  ];

  return (
    <div className="risk-chart">
      <h2>Attack Trends</h2>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />

        <Line 
          type="monotone"
          dataKey="attacks"
        />

      </LineChart>

    </div>
  );
}

export default AttackChart;
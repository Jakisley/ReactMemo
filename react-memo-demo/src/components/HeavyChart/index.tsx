import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./HeavyChart.module.css";

// генерируем много данных для графика
const generateData = () => {
  const data = [];
  for (let i = 0; i < 20000; i++) {
    data.push({
      name: `Точка ${i}`,
      value: Math.sin(i / 50) * 50 + Math.random() * 20,
      value2: Math.cos(i / 40) * 40 + Math.random() * 15,
    });
  }
  return data;
};

const data = generateData();

export default function HeavyChart() {
  console.log("HeavyChart loaded");

  return (
    <div className={styles.chart}>
      <h3>Тяжёлый график (ленивая загрузка)</h3>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" hide />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        <Line type="monotone" dataKey="value2" stroke="#82ca9d" dot={false} />
      </LineChart>
    </div>
  );
}

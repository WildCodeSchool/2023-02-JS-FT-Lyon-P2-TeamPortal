import Chart1 from "../Chart1/Chart1";
import Chart2 from "../Chart2/Chart2";
import Chart3 from "../Chart3/Chart3";

export default function ChartGroup() {
  return (
    <div className="chart-container">
      <Chart1 />
      <Chart2 />
      <Chart3 />;
    </div>
  );
}

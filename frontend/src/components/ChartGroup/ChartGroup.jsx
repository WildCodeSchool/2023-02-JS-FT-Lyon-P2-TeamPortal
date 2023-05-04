import Chart1 from "../Chart1/Chart1";
import Chart2 from "../Chart2/Chart2";
import Chart3 from "../Chart3/Chart3";
import "./ChartGroup.css";

export default function ChartGroup() {
  return (
    <div>
      <div className="chart-container">
        <div className="Chart1">
          <Chart1 />
        </div>
        <div className="Chart2">
          <Chart2 />
        </div>
        <div className="Chart3">
          <Chart3 />
        </div>
      </div>
    </div>
  );
}

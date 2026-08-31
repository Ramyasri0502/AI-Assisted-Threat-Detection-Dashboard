function RiskChart() {
  return (
    <div className="risk-chart">
      <h2>Risk Analysis</h2>

      <div className="risk-item">
        <span>Critical Threats</span>
        <strong>15%</strong>
      </div>

      <div className="risk-item">
        <span>High Risk</span>
        <strong>35%</strong>
      </div>

      <div className="risk-item">
        <span>Medium Risk</span>
        <strong>40%</strong>
      </div>

      <div className="risk-item">
        <span>Low Risk</span>
        <strong>10%</strong>
      </div>
    </div>
  );
}

export default RiskChart;
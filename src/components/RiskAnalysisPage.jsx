import { useEffect, useState } from "react";

function RiskAnalysisPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRiskAnalysis = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/risk-analysis"
        );

        const result = await response.json();

        if (!response.ok) {
          setError(result.message || "Failed to load risk analysis");
          return;
        }

        setData(result);
      } catch (err) {
        setError("Backend server is not running.");
      }
    };

    fetchRiskAnalysis();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Risk Analysis</h1>
        <p>Analyze security risks and identify high-risk areas</p>
      </div>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!data && !error && <p>Loading risk analysis...</p>}

      {data && (
        <>
          <div className="report-grid">
            <div className="report-card">
              <h2>Overall Risk Score</h2>
              <p>
                <strong>{data.overallRiskScore}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Critical Risk</h2>
              <p>
                <strong>{data.criticalRisk}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>High Risk</h2>
              <p>
                <strong>{data.highRisk}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Medium Risk</h2>
              <p>
                <strong>{data.mediumRisk}</strong>
              </p>
            </div>
          </div>

          <div className="alert-table" style={{ marginTop: "25px" }}>
            <h2>Risk Analysis Details</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Risk Score</th>
                  <th>Severity</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {data.riskAnalysis.map((risk) => (
                  <tr key={risk.id}>
                    <td>{risk.id}</td>
                    <td>{risk.category}</td>
                    <td>{risk.riskScore}</td>
                    <td>{risk.severity}</td>
                    <td>{risk.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default RiskAnalysisPage;
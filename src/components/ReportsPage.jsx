import { useEffect, useState } from "react";

function ReportsPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/reports"
        );

        const result = await response.json();

        if (!response.ok) {
          setError(result.message || "Failed to load reports");
          return;
        }

        setData(result.report);
      } catch (err) {
        setError("Backend server is not running.");
      }
    };

    fetchReports();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Security Reports</h1>
        <p>Generate and review security reports and threat analysis</p>
      </div>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!data && !error && <p>Loading security reports...</p>}

      {data && (
        <>
          <div className="report-grid">
            <div className="report-card">
              <h2>Threat Summary</h2>
              <p>
                Total Threats:{" "}
                <strong>{data.threatSummary.totalThreats}</strong>
              </p>
              <p>
                Critical Threats:{" "}
                <strong>{data.threatSummary.criticalThreats}</strong>
              </p>
              <p>
                Active Incidents:{" "}
                <strong>{data.threatSummary.activeIncidents}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Security Alerts</h2>
              <p>
                Total Alerts:{" "}
                <strong>{data.securityAlerts.totalAlerts}</strong>
              </p>
              <p>
                Critical Alerts:{" "}
                <strong>{data.securityAlerts.criticalAlerts}</strong>
              </p>
              <p>
                Resolved Alerts:{" "}
                <strong>{data.securityAlerts.resolvedAlerts}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Risk Analysis</h2>
              <p>
                Overall Risk Score:{" "}
                <strong>{data.riskAnalysis.overallRiskScore}</strong>
              </p>
              <p>
                Critical Risk:{" "}
                <strong>{data.riskAnalysis.criticalRisk}</strong>
              </p>
              <p>
                High Risk:{" "}
                <strong>{data.riskAnalysis.highRisk}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Attack Trends</h2>
              <p>
                Total Attacks:{" "}
                <strong>{data.attackTrends.totalAttacks}</strong>
              </p>
              <p>
                Critical Attacks:{" "}
                <strong>{data.attackTrends.criticalAttacks}</strong>
              </p>
              <p>
                Blocked Attacks:{" "}
                <strong>{data.attackTrends.blockedAttacks}</strong>
              </p>
              <p>
                Attack Growth:{" "}
                <strong>{data.attackTrends.attackGrowth}</strong>
              </p>
            </div>
          </div>

          <div className="alert-table" style={{ marginTop: "25px" }}>
            <h2>Report Information</h2>
            <p>
              This security report provides a summary of detected threats,
              security alerts, attack trends, and overall risk analysis.
            </p>

            <p style={{ marginTop: "15px" }}>
              Report generated successfully from the Security Operations
              Dashboard backend.
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default ReportsPage;
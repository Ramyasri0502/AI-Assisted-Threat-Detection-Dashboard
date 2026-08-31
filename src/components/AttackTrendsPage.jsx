import { useEffect, useState } from "react";

function AttackTrendsPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAttackTrends = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/attack-trends"
        );

        const result = await response.json();

        if (!response.ok) {
          setError(result.message || "Failed to load attack trends");
          return;
        }

        setData(result);
      } catch (err) {
        setError("Backend server is not running.");
      }
    };

    fetchAttackTrends();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Attack Trends</h1>
        <p>Analyze attack patterns and security trends</p>
      </div>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!data && !error && <p>Loading attack trends...</p>}

      {data && (
        <>
          <div className="report-grid">
            <div className="report-card">
              <h2>Total Attacks</h2>
              <p>
                <strong>{data.totalAttacks}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Critical Attacks</h2>
              <p>
                <strong>{data.criticalAttacks}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Blocked Attacks</h2>
              <p>
                <strong>{data.blockedAttacks}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Attack Growth</h2>
              <p>
                <strong>{data.attackGrowth}</strong>
              </p>
            </div>
          </div>

          <div className="alert-table" style={{ marginTop: "25px" }}>
            <h2>Attack Distribution</h2>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Attack Type</th>
                  <th>Count</th>
                  <th>Severity</th>
                </tr>
              </thead>

              <tbody>
                {data.attackTrends.map((attack) => (
                  <tr key={attack.id}>
                    <td>{attack.id}</td>
                    <td>{attack.attackType}</td>
                    <td>{attack.count}</td>
                    <td>{attack.severity}</td>
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

export default AttackTrendsPage;
import { useEffect, useState } from "react";

function SecurityAlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAlerts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/alerts");
      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to load alerts");
        return;
      }

      setAlerts(data.alerts);
    } catch (err) {
      setError("Backend server is not running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Security Alerts</h1>
        <p>Monitor and manage security alerts</p>
      </div>

      {loading && <p>Loading alerts...</p>}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="alert-table">
          <h2>Security Alerts</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Source</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id}>
                  <td>{alert.id}</td>
                  <td>{alert.title}</td>
                  <td>{alert.severity}</td>
                  <td>{alert.status}</td>
                  <td>{alert.source}</td>
                  <td>{alert.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default SecurityAlertsPage;
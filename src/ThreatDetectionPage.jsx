import { useState } from "react";

function ThreatDetectionPage() {
  const [ipAddress, setIpAddress] = useState("");
  const [threatType, setThreatType] = useState("Malware");
  const [activityDetails, setActivityDetails] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const analyzeThreat = async (e) => {
    e.preventDefault();

    setResult(null);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/threats/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ipAddress,
            threatType,
            activityDetails
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Threat analysis failed");
        return;
      }

      setResult(data.threat);
    } catch (err) {
      setError("Backend server is not running.");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Threat Detection</h1>
        <p>Analyze and detect potential security threats</p>
      </div>

      <div className="alert-table">
        <h2>Analyze Threat</h2>

        <form onSubmit={analyzeThreat}>
          <div className="form-group">
            <label>IP Address</label>
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              placeholder="Example: 192.168.1.10"
              required
            />
          </div>

          <div className="form-group">
            <label>Threat Type</label>
            <select
              value={threatType}
              onChange={(e) => setThreatType(e.target.value)}
            >
              <option>Malware</option>
              <option>Brute Force</option>
              <option>Phishing</option>
              <option>DDoS</option>
              <option>Port Scan</option>
            </select>
          </div>

          <div className="form-group">
            <label>Activity Details</label>
            <textarea
              value={activityDetails}
              onChange={(e) => setActivityDetails(e.target.value)}
              placeholder="Describe the suspicious activity"
              required
            />
          </div>

          <button type="submit">Analyze Threat</button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "15px" }}>
            {error}
          </p>
        )}

        {result && (
          <div style={{ marginTop: "20px" }}>
            <h2>Analysis Result</h2>

            <p>
              <strong>IP Address:</strong> {result.ipAddress}
            </p>

            <p>
              <strong>Threat Type:</strong> {result.threatType}
            </p>

            <p>
              <strong>Activity:</strong> {result.activityDetails}
            </p>

            <p>
              <strong>Risk Score:</strong> {result.riskScore}
            </p>

            <p>
              <strong>Severity:</strong> {result.severity}
            </p>

            <p>
              <strong>Status:</strong> {result.status}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default ThreatDetectionPage;
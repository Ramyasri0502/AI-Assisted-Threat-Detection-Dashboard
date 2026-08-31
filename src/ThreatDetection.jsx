function ThreatDetection() {

  const threats = [
    {
      name: "Malware Detection",
      severity: "High",
      status: "Blocked"
    },
    {
      name: "Unauthorized Access",
      severity: "Medium",
      status: "Monitoring"
    },
    {
      name: "Phishing Attempt",
      severity: "Low",
      status: "Resolved"
    }
  ];

  return (
    <div className="alert-table">
      <h2>Threat Detection</h2>

      <table>
        <thead>
          <tr>
            <th>Threat Type</th>
            <th>Severity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {threats.map((threat, index) => (
            <tr key={index}>
              <td>{threat.name}</td>
              <td>{threat.severity}</td>
              <td>{threat.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ThreatDetection;
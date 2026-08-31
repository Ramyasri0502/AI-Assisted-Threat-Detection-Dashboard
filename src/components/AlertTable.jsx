import React from "react";

function AlertTable() {
  const alerts = [
    {
      id: "ALT-001",
      type: "Brute Force Attack",
      source: "192.168.1.45",
      severity: "Critical",
      status: "Active",
      time: "2 min ago",
    },
    {
      id: "ALT-002",
      type: "Suspicious Login",
      source: "10.0.0.24",
      severity: "High",
      status: "Investigating",
      time: "8 min ago",
    },
    {
      id: "ALT-003",
      type: "Malware Detected",
      source: "172.16.0.18",
      severity: "High",
      status: "Active",
      time: "15 min ago",
    },
    {
      id: "ALT-004",
      type: "Port Scanning",
      source: "192.168.1.78",
      severity: "Medium",
      status: "Resolved",
      time: "25 min ago",
    },
    {
      id: "ALT-005",
      type: "Unusual Network Traffic",
      source: "10.0.0.56",
      severity: "Low",
      status: "Resolved",
      time: "42 min ago",
    },
  ];

  const getSeverityStyle = (severity) => {
    if (severity === "Critical") {
      return {
        background: "#7f1d1d",
        color: "#fecaca",
      };
    }

    if (severity === "High") {
      return {
        background: "#78350f",
        color: "#fed7aa",
      };
    }

    if (severity === "Medium") {
      return {
        background: "#713f12",
        color: "#fef08a",
      };
    }

    return {
      background: "#14532d",
      color: "#bbf7d0",
    };
  };

  const getStatusStyle = (status) => {
    if (status === "Active") {
      return {
        background: "#7f1d1d",
        color: "#fecaca",
      };
    }

    if (status === "Investigating") {
      return {
        background: "#1e3a8a",
        color: "#bfdbfe",
      };
    }

    return {
      background: "#14532d",
      color: "#bbf7d0",
    };
  };

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1e293b",
        borderRadius: "12px",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
        overflowX: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#e5e7eb",
              fontSize: "20px",
            }}
          >
            Security Alerts
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              color: "#94a3b8",
              fontSize: "13px",
            }}
          >
            Recent security alerts detected by the system
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            color: "#cbd5e1",
            padding: "8px 12px",
            borderRadius: "7px",
            fontSize: "13px",
          }}
        >
          {alerts.length} Alerts
        </div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "800px",
        }}
      >
        <thead>
          <tr
            style={{
              borderBottom: "1px solid #334155",
            }}
          >
            <th style={headerStyle}>Alert ID</th>
            <th style={headerStyle}>Threat Type</th>
            <th style={headerStyle}>Source IP</th>
            <th style={headerStyle}>Severity</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Detected</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr
              key={alert.id}
              style={{
                borderBottom: "1px solid #1e293b",
              }}
            >
              <td style={cellStyle}>{alert.id}</td>

              <td
                style={{
                  ...cellStyle,
                  color: "#e5e7eb",
                  fontWeight: "600",
                }}
              >
                {alert.type}
              </td>

              <td
                style={{
                  ...cellStyle,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                }}
              >
                {alert.source}
              </td>

              <td style={cellStyle}>
                <span
                  style={{
                    ...badgeStyle,
                    ...getSeverityStyle(alert.severity),
                  }}
                >
                  {alert.severity}
                </span>
              </td>

              <td style={cellStyle}>
                <span
                  style={{
                    ...badgeStyle,
                    ...getStatusStyle(alert.status),
                  }}
                >
                  {alert.status}
                </span>
              </td>

              <td
                style={{
                  ...cellStyle,
                  color: "#94a3b8",
                }}
              >
                {alert.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  textAlign: "left",
  padding: "12px",
  color: "#94a3b8",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase",
};

const cellStyle = {
  padding: "14px 12px",
  color: "#cbd5e1",
  fontSize: "13px",
};

const badgeStyle = {
  display: "inline-block",
  padding: "5px 9px",
  borderRadius: "6px",
  fontSize: "11px",
  fontWeight: "600",
};

export default AlertTable;
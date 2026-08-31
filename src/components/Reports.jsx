import React from "react";

function Report() {
  const reports = [
    {
      id: "RPT-001",
      title: "Weekly Security Report",
      type: "Security Analysis",
      date: "14 Aug 2026",
      status: "Completed",
    },
    {
      id: "RPT-002",
      title: "Threat Detection Report",
      type: "Threat Analysis",
      date: "13 Aug 2026",
      status: "Completed",
    },
    {
      id: "RPT-003",
      title: "Risk Assessment Report",
      type: "Risk Analysis",
      date: "12 Aug 2026",
      status: "Completed",
    },
  ];

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1e293b",
        borderRadius: "12px",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#e5e7eb",
          fontSize: "20px",
        }}
      >
        Security Reports
      </h2>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "13px",
          marginTop: "6px",
          marginBottom: "20px",
        }}
      >
        Generated security reports and analytics.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "14px",
          marginBottom: "20px",
        }}
      >
        <div style={summaryCard}>
          <span style={labelStyle}>Total Reports</span>
          <strong style={valueStyle}>{reports.length}</strong>
        </div>

        <div style={summaryCard}>
          <span style={labelStyle}>Completed</span>
          <strong style={valueStyle}>3</strong>
        </div>

        <div style={summaryCard}>
          <span style={labelStyle}>Latest Report</span>
          <strong style={{ ...valueStyle, fontSize: "16px" }}>
            14 Aug 2026
          </strong>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            minWidth: "650px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid #334155",
              }}
            >
              <th style={headerStyle}>Report ID</th>
              <th style={headerStyle}>Report Name</th>
              <th style={headerStyle}>Type</th>
              <th style={headerStyle}>Date</th>
              <th style={headerStyle}>Status</th>
              <th style={headerStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                style={{
                  borderBottom: "1px solid #1e293b",
                }}
              >
                <td style={cellStyle}>{report.id}</td>

                <td
                  style={{
                    ...cellStyle,
                    color: "#e5e7eb",
                    fontWeight: "600",
                  }}
                >
                  {report.title}
                </td>

                <td style={cellStyle}>{report.type}</td>

                <td style={cellStyle}>{report.date}</td>

                <td style={cellStyle}>
                  <span
                    style={{
                      background: "#14532d",
                      color: "#bbf7d0",
                      padding: "5px 9px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {report.status}
                  </span>
                </td>

                <td style={cellStyle}>
                  <button
                    onClick={() =>
                      alert(`${report.title} selected`)
                    }
                    style={{
                      background: "#2563eb",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "7px 12px",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const summaryCard = {
  background: "#0f172a",
  border: "1px solid #1e293b",
  borderRadius: "8px",
  padding: "15px",
};

const labelStyle = {
  display: "block",
  color: "#94a3b8",
  fontSize: "12px",
  marginBottom: "7px",
};

const valueStyle = {
  color: "#e5e7eb",
  fontSize: "24px",
};

const headerStyle = {
  textAlign: "left",
  padding: "12px",
  color: "#94a3b8",
  fontSize: "12px",
  textTransform: "uppercase",
};

const cellStyle = {
  padding: "13px 12px",
  color: "#cbd5e1",
  fontSize: "13px",
};

export default Report;
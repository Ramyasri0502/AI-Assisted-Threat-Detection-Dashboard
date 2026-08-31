import React from "react";

function AttackChart() {
  const attacks = [
    { name: "Malware", count: 42 },
    { name: "Brute Force", count: 35 },
    { name: "Phishing", count: 28 },
    { name: "Port Scan", count: 21 },
    { name: "DDoS", count: 16 },
  ];

  const maxCount = Math.max(...attacks.map((attack) => attack.count));

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
        Attack Overview
      </h2>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "13px",
          marginTop: "6px",
          marginBottom: "22px",
        }}
      >
        Number of detected attacks by category
      </p>

      <div>
        {attacks.map((attack) => {
          const width = (attack.count / maxCount) * 100;

          return (
            <div key={attack.name} style={{ marginBottom: "18px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "7px",
                }}
              >
                <span
                  style={{
                    color: "#cbd5e1",
                    fontSize: "14px",
                  }}
                >
                  {attack.name}
                </span>

                <span
                  style={{
                    color: "#e5e7eb",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {attack.count}
                </span>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "9px",
                  background: "#1e293b",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${width}%`,
                    height: "100%",
                    background: "#2563eb",
                    borderRadius: "10px",
                    transition: "width 0.4s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "22px",
          paddingTop: "15px",
          borderTop: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#94a3b8",
            fontSize: "13px",
          }}
        >
          Total Attacks
        </span>

        <span
          style={{
            color: "#60a5fa",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          {attacks.reduce((total, attack) => total + attack.count, 0)}
        </span>
      </div>
    </div>
  );
}

export default AttackChart;
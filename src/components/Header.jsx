import React from "react";

function Header() {
  return (
    <header
      style={{
        background: "#111827",
        borderBottom: "1px solid #1e293b",
        padding: "18px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            color: "#f8fafc",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          Security Operations Dashboard
        </h1>

        <p
          style={{
            margin: "5px 0 0",
            color: "#94a3b8",
            fontSize: "13px",
          }}
        >
          AI-Assisted Threat Detection & Risk Mitigation Analytics
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: "8px",
          padding: "8px 12px",
        }}
      >
        <span
          style={{
            width: "9px",
            height: "9px",
            background: "#22c55e",
            borderRadius: "50%",
            display: "inline-block",
          }}
        />

        <span
          style={{
            color: "#cbd5e1",
            fontSize: "13px",
          }}
        >
          System Online
        </span>
      </div>
    </header>
  );
}

export default Header;
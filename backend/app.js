const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home
app.get("/", (req, res) => {
  res.json({
    message: "Security Operations Dashboard Backend is running successfully"
  });
});

// Health Check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Security Operations API is working"
  });
});

// Threat Detection API
app.post("/api/threats/analyze", (req, res) => {
  const { ipAddress, threatType, activityDetails } = req.body;

  if (!ipAddress || !threatType || !activityDetails) {
    return res.status(400).json({
      success: false,
      message: "IP address, threat type and activity details are required"
    });
  }

  let riskScore = 30;

  switch (threatType.toLowerCase()) {
    case "malware":
      riskScore = 85;
      break;
    case "brute force":
      riskScore = 75;
      break;
    case "phishing":
      riskScore = 70;
      break;
    case "ddos":
      riskScore = 90;
      break;
    case "port scan":
      riskScore = 60;
      break;
    default:
      riskScore = 30;
  }

  let severity = "Low";

  if (riskScore >= 80) {
    severity = "Critical";
  } else if (riskScore >= 70) {
    severity = "High";
  } else if (riskScore >= 50) {
    severity = "Medium";
  }

  res.json({
    success: true,
    message: "Threat analyzed successfully",
    threat: {
      ipAddress,
      threatType,
      activityDetails,
      riskScore,
      severity,
      status: "Detected"
    }
  });
});

// Security Alerts API
app.get("/api/alerts", (req, res) => {
  const alerts = [
    {
      id: "ALT-001",
      title: "Malware Detected",
      severity: "Critical",
      status: "Active",
      source: "192.168.1.10",
      description: "Malware activity detected on the network"
    },
    {
      id: "ALT-002",
      title: "Brute Force Attack",
      severity: "High",
      status: "Active",
      source: "192.168.1.25",
      description: "Multiple failed login attempts detected"
    },
    {
      id: "ALT-003",
      title: "Phishing Attempt",
      severity: "Medium",
      status: "Investigating",
      source: "192.168.1.40",
      description: "Suspicious phishing activity detected"
    },
    {
      id: "ALT-004",
      title: "Port Scan Detected",
      severity: "Medium",
      status: "Resolved",
      source: "192.168.1.55",
      description: "Unusual port scanning activity detected"
    }
  ];

  res.json({
    success: true,
    totalAlerts: alerts.length,
    alerts
  });
});
// Attack Trends API
app.get("/api/attack-trends", (req, res) => {
  const attackTrends = [
    {
      id: "ATK-001",
      attackType: "Malware",
      count: 42,
      severity: "Critical"
    },
    {
      id: "ATK-002",
      attackType: "Brute Force",
      count: 35,
      severity: "High"
    },
    {
      id: "ATK-003",
      attackType: "Phishing",
      count: 28,
      severity: "High"
    },
    {
      id: "ATK-004",
      attackType: "Port Scan",
      count: 21,
      severity: "Medium"
    },
    {
      id: "ATK-005",
      attackType: "DDoS",
      count: 16,
      severity: "Critical"
    }
  ];

  res.json({
    success: true,
    totalAttacks: 210,
    criticalAttacks: 34,
    blockedAttacks: 165,
    attackGrowth: "111.1%",
    attackTrends
  });
});
// Risk Analysis API
app.get("/api/risk-analysis", (req, res) => {
  const riskAnalysis = [
    {
      id: "RISK-001",
      category: "Malware",
      riskScore: 85,
      severity: "Critical",
      status: "High Risk"
    },
    {
      id: "RISK-002",
      category: "Brute Force",
      riskScore: 75,
      severity: "High",
      status: "High Risk"
    },
    {
      id: "RISK-003",
      category: "Phishing",
      riskScore: 70,
      severity: "High",
      status: "High Risk"
    },
    {
      id: "RISK-004",
      category: "Port Scan",
      riskScore: 60,
      severity: "Medium",
      status: "Medium Risk"
    },
    {
      id: "RISK-005",
      category: "DDoS",
      riskScore: 90,
      severity: "Critical",
      status: "Critical Risk"
    }
  ];

  res.json({
    success: true,
    overallRiskScore: 66,
    criticalRisk: 1,
    highRisk: 4,
    mediumRisk: 3,
    riskAnalysis
  });
});
// Reports API
app.get("/api/reports", (req, res) => {
  const report = {
    threatSummary: {
      totalThreats: 142,
      criticalThreats: 18,
      activeIncidents: 27
    },

    securityAlerts: {
      totalAlerts: 10,
      criticalAlerts: 2,
      resolvedAlerts: 4
    },

    riskAnalysis: {
      overallRiskScore: 66,
      criticalRisk: 1,
      highRisk: 4,
      mediumRisk: 3
    },

    attackTrends: {
      totalAttacks: 210,
      criticalAttacks: 34,
      blockedAttacks: 165,
      attackGrowth: "111.1%"
    }
  };

  res.json({
    success: true,
    message: "Security report generated successfully",
    report
  });
});
// Settings API
app.get("/api/settings", (req, res) => {
  const settings = {
    general: {
      realTimeAlerts: true,
      autoRefreshDashboard: true,
      emailNotifications: true
    },

    alertThresholds: {
      high: 70,
      medium: 40
    },

    system: {
      refreshInterval: 30,
      defaultTimeRange: "Last 24 Hours"
    },

    security: {
      twoFactorAuthentication: true,
      sessionTimeout: 30
    },

    appearance: {
      darkMode: true
    }
  };

  res.json({
    success: true,
    message: "Settings retrieved successfully",
    settings
  });
});
// Start Server
app.listen(PORT, () => {
  console.log(
    `Security Operations Dashboard Backend running on http://localhost:${PORT}`
  );
});
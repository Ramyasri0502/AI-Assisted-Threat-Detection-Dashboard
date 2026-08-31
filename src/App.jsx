import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ThreatDetectionPage from "./components/ThreatDetectionPage";
import SecurityAlertsPage from "./components/SecurityAlertsPage";
import AttackTrendsPage from "./components/AttackTrendsPage";
import RiskAnalysisPage from "./components/RiskAnalysisPage";
import ReportsPage from "./components/ReportsPage";
import SettingsPage from "./components/SettingsPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "threat-detection":
        return <ThreatDetectionPage />;
      case "alerts":
        return <SecurityAlertsPage />;
      case "attack-trends":
        return <AttackTrendsPage />;
      case "risk-analysis":
        return <RiskAnalysisPage />;
      case "reports":
        return <ReportsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">

      <Sidebar currentPage={currentPage} onNavigate={handleNavigation} />

      <div className="main-content">
        {renderPage()}
      </div>

    </div>
  );
}

export default App;
function Sidebar({ currentPage, onNavigate }) {
  const menuItems = [
    { name: "Dashboard", id: "dashboard" },
    { name: "Threat Detection", id: "threat-detection" },
    { name: "Alerts", id: "alerts" },
    { name: "Attack Trends", id: "attack-trends" },
    { name: "Risk Analysis", id: "risk-analysis" },
    { name: "Reports", id: "reports" },
    { name: "Settings", id: "settings" }
  ];

  return (
    <div className="sidebar">
      <h2>Security Ops</h2>

      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={currentPage === item.id ? "active" : ""}
            onClick={() => onNavigate(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
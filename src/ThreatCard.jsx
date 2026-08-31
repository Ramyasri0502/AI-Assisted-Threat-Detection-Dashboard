function ThreatCard({ title, value, status }) {
  return (
    <div className="threat-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
      <p>{status}</p>
    </div>
  );
}

export default ThreatCard;
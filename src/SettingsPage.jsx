import { useEffect, useState } from "react";

function SettingsPage() {
  const [settings, setSettings] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/settings"
        );

        const result = await response.json();

        if (!response.ok) {
          setError(result.message || "Failed to load settings");
          return;
        }

        setSettings(result.settings);
      } catch (err) {
        setError("Backend server is not running.");
      }
    };

    fetchSettings();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Settings</h1>
        <p>Manage security dashboard settings</p>
      </div>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {!settings && !error && <p>Loading settings...</p>}

      {settings && (
        <>
          <div className="report-grid">
            <div className="report-card">
              <h2>General Settings</h2>

              <p>
                Real-time Alerts:{" "}
                <strong>
                  {settings.general.realTimeAlerts ? "Enabled" : "Disabled"}
                </strong>
              </p>

              <p>
                Auto Refresh Dashboard:{" "}
                <strong>
                  {settings.general.autoRefreshDashboard
                    ? "Enabled"
                    : "Disabled"}
                </strong>
              </p>

              <p>
                Email Notifications:{" "}
                <strong>
                  {settings.general.emailNotifications
                    ? "Enabled"
                    : "Disabled"}
                </strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Alert Thresholds</h2>

              <p>
                High Alert Threshold:{" "}
                <strong>{settings.alertThresholds.high}%</strong>
              </p>

              <p>
                Medium Alert Threshold:{" "}
                <strong>{settings.alertThresholds.medium}%</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>System Settings</h2>

              <p>
                Refresh Interval:{" "}
                <strong>{settings.system.refreshInterval} seconds</strong>
              </p>

              <p>
                Default Time Range:{" "}
                <strong>{settings.system.defaultTimeRange}</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Security Settings</h2>

              <p>
                Two-Factor Authentication:{" "}
                <strong>
                  {settings.security.twoFactorAuthentication
                    ? "Enabled"
                    : "Disabled"}
                </strong>
              </p>

              <p>
                Session Timeout:{" "}
                <strong>{settings.security.sessionTimeout} minutes</strong>
              </p>
            </div>

            <div className="report-card">
              <h2>Appearance</h2>

              <p>
                Dark Mode:{" "}
                <strong>
                  {settings.appearance.darkMode
                    ? "Enabled"
                    : "Disabled"}
                </strong>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SettingsPage;
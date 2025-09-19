import React from 'react';

const logs = [
  {
    id: 'LOG-9821',
    timestamp: '2025-01-07 09:20',
    actor: 'OpsBot',
    action: 'Resolved incident #427 via failover playbook',
    severity: 'Info',
  },
  {
    id: 'LOG-9816',
    timestamp: '2025-01-07 08:42',
    actor: 'Priya Patel',
    action: 'Published workflow "Nightly capacity review"',
    severity: 'Change',
  },
  {
    id: 'LOG-9794',
    timestamp: '2025-01-06 22:14',
    actor: 'Alex Johnson',
    action: 'Updated SLO targets for customer onboarding service',
    severity: 'Warning',
  },
];

export default function ActivityLogs() {
  return (
    <div className="section-card">
      <h3>Recent Activity</h3>
      <p style={{ color: '#4b5563', marginTop: '8px', marginBottom: '24px' }}>
        Workflow executions and operator actions from the last 24 hours.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Timestamp</th>
              <th>Actor</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td style={{ minWidth: '260px' }}>{log.action}</td>
                <td>{log.timestamp}</td>
                <td>{log.actor}</td>
                <td>
                  <span
                    className={`badge ${
                      log.severity === 'Warning'
                        ? 'badge--warning'
                        : log.severity === 'Change'
                        ? 'badge--neutral'
                        : 'badge--success'
                    }`}
                  >
                    {log.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

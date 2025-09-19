import React from 'react';

const stats = [
  { label: 'Active Workflows', value: 18, detail: '3 in review' },
  { label: 'On-call Alerts', value: 4, detail: 'Resolved in < 5m' },
  { label: 'Automation Coverage', value: '72%', detail: 'Up 5% week over week' },
  { label: 'MTTR (30d)', value: '12m', detail: 'Target: under 15m' },
];

const recentActivity = [
  { time: '09:24', description: 'Workflow "Customer Onboarding" deployed to production' },
  { time: '08:51', description: 'Incident #427 closed by OpsBot automation' },
  { time: '08:18', description: 'Playbook "Database failover" updated by Alex J.' },
];

export default function Dashboard() {
  return (
    <div>
      <section className="section-card">
        <h3>Key Metrics</h3>
        <div className="grid-two" style={{ marginTop: '16px' }}>
          {stats.map((item) => (
            <div key={item.label}>
              <p style={{ margin: '0 0 6px 0', color: '#6b7280', fontSize: '13px' }}>{item.label}</p>
              <p style={{ margin: 0, fontSize: '28px', fontWeight: 600 }}>{item.value}</p>
              <p style={{ margin: '6px 0 0 0', color: '#4b5563', fontSize: '13px' }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3>Recent Activity</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'grid', gap: '12px' }}>
          {recentActivity.map((item) => (
            <li key={item.time} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'monospace', color: '#1f2937', fontWeight: 600 }}>{item.time}</span>
              <span style={{ color: '#4b5563' }}>{item.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

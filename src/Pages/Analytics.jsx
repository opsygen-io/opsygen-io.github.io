import React from 'react';

const kpis = [
  {
    name: 'Automation Coverage',
    value: '72%',
    description: 'Percentage of incidents closed via automated playbooks.',
  },
  {
    name: 'Detection to Response',
    value: '3m 18s',
    description: 'Average time from alert creation to first automated action.',
  },
  {
    name: 'Human Escalations',
    value: '21%',
    description: 'Alerts that required human intervention in the past 7 days.',
  },
];

const suggestions = [
  'Add health checks for the finance batch workflow to trim escalation volume.',
  'Review queue thresholds during APAC hours; automation suppresses 34% of duplicate alerts.',
  'Expand OpsBot permissions to cover customer onboarding runbooks.',
];

export default function Analytics() {
  return (
    <div className="section-card">
      <h3>Automation Insights</h3>
      <p style={{ color: '#4b5563', marginTop: '8px', marginBottom: '24px' }}>
        These metrics summarise how OpsFLW automation is performing this week.
      </p>

      <div className="grid-two">
        {kpis.map((kpi) => (
          <div key={kpi.name}>
            <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '13px' }}>{kpi.name}</p>
            <p style={{ margin: 0, fontSize: '26px', fontWeight: 600 }}>{kpi.value}</p>
            <p style={{ margin: '6px 0 0 0', color: '#4b5563', fontSize: '13px' }}>{kpi.description}</p>
          </div>
        ))}
      </div>

      <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

      <h4 style={{ margin: '0 0 12px 0' }}>What to Tackle Next</h4>
      <ol style={{ color: '#4b5563', margin: '0 0 0 20px', display: 'grid', gap: '12px' }}>
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

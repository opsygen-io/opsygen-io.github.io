import React, { useState } from 'react';

const defaultSettings = {
  organisationName: 'OpsFLW',
  incidentChannel: '#ops-alerts',
  timezone: 'UTC',
  weeklyDigest: true,
  maintenanceWindow: 'Saturdays 02:00-04:00 UTC',
};

export default function Settings() {
  const [form, setForm] = useState(defaultSettings);
  const [lastSaved, setLastSaved] = useState(null);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLastSaved(new Date().toLocaleTimeString());
  };

  return (
    <form className="section-card" onSubmit={handleSubmit}>
      <h3>Workspace Settings</h3>
      <p style={{ color: '#4b5563', marginTop: '8px', marginBottom: '24px' }}>
        These controls affect automation defaults for every team connected to OpsFLW.
      </p>

      <div className="field-group">
        <label htmlFor="organisation">Organisation name</label>
        <input
          id="organisation"
          type="text"
          value={form.organisationName}
          onChange={(event) => updateField('organisationName', event.target.value)}
        />
      </div>

      <div className="field-group">
        <label htmlFor="incident-channel">Incident channel</label>
        <input
          id="incident-channel"
          type="text"
          value={form.incidentChannel}
          onChange={(event) => updateField('incidentChannel', event.target.value)}
        />
      </div>

      <div className="field-group">
        <label htmlFor="timezone">Default timezone</label>
        <select
          id="timezone"
          value={form.timezone}
          onChange={(event) => updateField('timezone', event.target.value)}
        >
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>
          <option value="Europe/London">Europe/London</option>
          <option value="Asia/Singapore">Asia/Singapore</option>
        </select>
      </div>

      <div className="field-group" style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <label htmlFor="digest" style={{ margin: 0 }}>Send weekly automation digest</label>
        <input
          id="digest"
          type="checkbox"
          checked={form.weeklyDigest}
          onChange={(event) => updateField('weeklyDigest', event.target.checked)}
        />
      </div>

      <div className="field-group">
        <label htmlFor="maintenance">Maintenance window</label>
        <textarea
          id="maintenance"
          rows={3}
          value={form.maintenanceWindow}
          onChange={(event) => updateField('maintenanceWindow', event.target.value)}
        />
      </div>

      <button type="submit" className="button button--primary">
        Save changes
      </button>

      {lastSaved && (
        <p style={{ color: '#047857', marginTop: '16px' }}>
          Settings saved at {lastSaved} (client-side example only).
        </p>
      )}
    </form>
  );
}

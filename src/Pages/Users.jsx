import React from 'react';

const team = [
  { name: 'Alex Johnson', role: 'Platform Admin', email: 'alex@opsflw.io', status: 'Active' },
  { name: 'Priya Patel', role: 'Automation Engineer', email: 'priya@opsflw.io', status: 'Active' },
  { name: 'Diego Romero', role: 'SRE', email: 'diego@opsflw.io', status: 'On leave' },
  { name: 'Morgan Lee', role: 'Support Lead', email: 'morgan@opsflw.io', status: 'Active' },
];

export default function Users() {
  return (
    <div className="section-card">
      <h3>User Directory</h3>
      <p style={{ color: '#4b5563', marginTop: '8px', marginBottom: '24px' }}>
        Invite teammates via your identity provider. Keep roles scoped to what the workflow requires.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr key={member.email}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.email}</td>
                <td>
                  <span className={`badge ${member.status === 'Active' ? 'badge--success' : 'badge--warning'}`}>
                    {member.status}
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

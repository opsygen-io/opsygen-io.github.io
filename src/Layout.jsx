import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const navigation = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Users', path: '/users' },
  { label: 'Activity Logs', path: '/activity' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Settings', path: '/settings' },
];

export default function Layout() {
  const location = useLocation();
  const activeItem = navigation.find((item) => location.pathname.startsWith(item.path));

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <div>
          <h1>OpsFLW Portal</h1>
          <nav>
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link${isActive ? ' active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <div className="app-content">
        <header className="app-header">
          <h2>{activeItem ? activeItem.label : 'Overview'}</h2>
          <p>Your operational overview and administration console.</p>
        </header>
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

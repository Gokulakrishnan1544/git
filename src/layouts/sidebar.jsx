import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const Sidebar = () => {
  const [isPagesOpen, setPagesOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isComponentsOpen, setComponentsOpen] = useState(false);
  const [isMenuLevelOpen, setMenuLevelOpen] = useState(false);

  return (
    <div className="sidebar bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
      <h4>Dash UI</h4>

      <div className="mt-4">
        {/* Pages */}
        <div className="sidebar-item" onClick={() => setPagesOpen(!isPagesOpen)} style={{ cursor: 'pointer' }}>
          Pages {isPagesOpen ? '▲' : '▼'}
        </div>
        {isPagesOpen && (
          <ul className="ps-3 list-unstyled">
            <li>Profile</li>
            <li>Settings</li>
            <li>Billing</li>
            <li>Pricing</li>
            <li>404 Error</li>
          </ul>
        )}

        {/* Authentication */}
        <div className="sidebar-item mt-3" onClick={() => setAuthOpen(!isAuthOpen)} style={{ cursor: 'pointer' }}>
          Authentication {isAuthOpen ? '▲' : '▼'}
        </div>
        {isAuthOpen && (
          <ul className="ps-3 list-unstyled">
            <li>Login</li>
            <li>Register</li>
            <li>Forgot Password</li>
          </ul>
        )}

        {/* Components */}
        <div className="sidebar-item mt-3" onClick={() => setComponentsOpen(!isComponentsOpen)} style={{ cursor: 'pointer' }}>
          Components {isComponentsOpen ? '▲' : '▼'}
        </div>
        {isComponentsOpen && (
          <ul className="ps-3">
            <li>Alerts</li>
            <li>Buttons</li>
          </ul>
        )}

        {/* Menu Level */}
        <div className="sidebar-item mt-3" onClick={() => setMenuLevelOpen(!isMenuLevelOpen)} style={{ cursor: 'pointer' }}>
          Menu Level {isMenuLevelOpen ? '▲' : '▼'}
        </div>
        {isMenuLevelOpen && (
          <ul className="ps-3">
            <li>Level 1</li>
            <li>Level 2
              <ul className="ps-3">
                <li>Sub Level</li>
              </ul>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

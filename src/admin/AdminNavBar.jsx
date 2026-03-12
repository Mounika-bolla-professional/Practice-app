import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import ViewCustomers from './ViewCustomers';
import AdminLogout from './AdminLogout';
import ApiDemo from './ApiDemo';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <div className="navbar-header">
          <h1>Admin Dashboard</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/admin/home" className="nav-link">Home</Link></li>
          <li><Link to="/admin/view-customers" className="nav-link">View Users</Link></li>
          <li><Link to="/admin/api-demo" className="nav-link">API Demo</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </nav>

      <div className="admin-content">
        <Routes>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/view-customers" element={<ViewCustomers />} />
          <Route path="/admin/api-demo" element={<ApiDemo />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
        </Routes>
      </div>
    </div>
  );
}
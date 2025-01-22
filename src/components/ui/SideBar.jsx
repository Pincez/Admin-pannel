// src/components/SideBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // We'll use react-router-dom for navigation links
import { FaTachometerAlt, FaUser, FaChartBar, FaCog, FaBell, FaSignOutAlt } from 'react-icons/fa';
import { Nav, Col, Button } from 'react-bootstrap';

const SideBar = () => {
  return (
    <Col xs={3} md={2} className="bg-dark text-white p-3 min-vh-100">
      <h3 className="text-center text-white mb-4">Admin Panel</h3>
      <Nav defaultActiveKey="/dashboard" className="flex-column">
        {/* Dashboard Link */}
        <Nav.Item>
          <Nav.Link as={Link} to="/dashboard" className="text-white d-flex align-items-center">
            <FaTachometerAlt className="me-2" /> {/* Add a small margin to the right of the icon */}
            Dashboard
          </Nav.Link>
        </Nav.Item>

        {/* User Management Link */}
        <Nav.Item>
          <Nav.Link as={Link} to="/users" className="text-white d-flex align-items-center">
            <FaUser className="me-2" /> {/* Add a small margin to the right of the icon */}
            Users
          </Nav.Link>
        </Nav.Item>

        {/* Reports Link */}
        <Nav.Item>
          <Nav.Link as={Link} to="/reports" className="text-white d-flex align-items-center">
            <FaChartBar className="me-2" /> {/* Add a small margin to the right of the icon */}
            Reports
          </Nav.Link>
        </Nav.Item>

        {/* Settings Link */}
        <Nav.Item>
          <Nav.Link as={Link} to="/settings" className="text-white d-flex align-items-center">
            <FaCog className="me-2" /> {/* Add a small margin to the right of the icon */}
            Settings
          </Nav.Link>
        </Nav.Item>

        {/* Notifications Link */}
        <Nav.Item>
          <Nav.Link as={Link} to="/notifications" className="text-white d-flex align-items-center">
            <FaBell className="me-2" /> {/* Add a small margin to the right of the icon */}
            Notifications
          </Nav.Link>
        </Nav.Item>

        {/* Logout Link */}
        <Nav.Item>
          <Nav.Link as={Link} to="/logout" className="text-white d-flex align-items-center">
            <FaSignOutAlt className="me-2" /> {/* Add a small margin to the right of the icon */}
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Optional: Button for mobile version to collapse the sidebar */}
      <Button variant="outline-light" className="w-100 mt-3">
        Collapse Sidebar
      </Button>
    </Col>
  );
};

export default SideBar;

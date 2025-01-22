import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing Router, Routes, and Route
import NavBar from "./components/ui/Navbar";
import SideBar from "./components/ui/SideBar";
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap grid system

// Dummy pages for routing (replace with real components)
import Dashboard from "./components/Pages/dummyPages/Dashboard";
import Users from "./components/Pages/dummyPages/Users";
import Settings from "./components/Pages/dummyPages/Settings";
import Reports from "./components/Pages/dummyPages/Reports";
import Notifications from "./components/Pages/dummyPages/Notifications";

function App() {
  return (
    <div>
      {/* NavBar at the top */}
      <NavBar />
      
      <Container fluid>
        <Row>
          {/* Sidebar on the left */}
          <Col xs={3} md={2} className="bg-dark text-white p-3 min-vh-100">
            <SideBar />
          </Col>

          {/* Content area to the right of the sidebar */}
          <Col xs={9} md={10} className="p-4">
            {/* Define Routes to display the correct page */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/notifications" element={<Notifications />} />
              {/* You can add more routes as needed */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

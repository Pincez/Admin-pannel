import React from 'react';
import { InputGroup, FormControl, Button, Navbar, Nav, Container } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm" style={{ height: '50px' }}>
      <Container fluid>
        <Nav className="me-auto">
          {/* Other Navbar content (optional) */}
        </Nav>

        {/* Right-aligned content */}
        <Nav className="ms-auto d-flex align-items-center">

          {/* Search Bar */}
          <InputGroup className="mb-3 me-3" style={{ maxWidth: '250px' }}>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{ fontSize: '14px' }}
            />
          </InputGroup>

          {/* Admin Account Name Button */}
          <Button variant="outline-secondary" className="me-3" style={{ fontSize: '12px', padding: '3px 8px' }}>
            Admin <span className="fw-bold">(Logged In)</span>
          </Button>

          {/* Notification Bell Icon */}
          <Button variant="outline-secondary" style={{ fontSize: '14px', padding: '5px 10px' }}>
            <FaBell size={18} />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

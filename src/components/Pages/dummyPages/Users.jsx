import React from 'react';
import { Container, Table, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

const Users = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Moderator' },
  ];

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={6}>
          <h2>User Management</h2>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="primary">Add New User</Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control type="text" placeholder="Search users..." />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="info" size="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;

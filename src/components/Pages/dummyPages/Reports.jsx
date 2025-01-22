import React from 'react';
import { Container, Table, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

const Reports = () => {
  const reports = [
    { id: 1, title: 'Monthly Sales', date: '2025-01-01', status: 'Completed' },
    { id: 2, title: 'User Activity', date: '2025-01-10', status: 'Pending' },
    { id: 3, title: 'Revenue Report', date: '2025-01-15', status: 'Completed' },
  ];

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={6}>
          <h2>Reports</h2>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="primary">Generate New Report</Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control type="text" placeholder="Search reports..." />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={report.id}>
              <td>{index + 1}</td>
              <td>{report.title}</td>
              <td>{report.date}</td>
              <td>
                <span className={`badge ${report.status === 'Completed' ? 'bg-success' : 'bg-warning'}`}>
                  {report.status}
                </span>
              </td>
              <td>
                <Button variant="info" size="sm" className="me-2">
                  View
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

export default Reports;

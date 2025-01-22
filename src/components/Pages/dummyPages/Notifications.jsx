import React, { useState } from 'react';
import { Container, ListGroup, Button, Row, Col, Badge, Card } from 'react-bootstrap';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user registered: John Doe', type: 'info', read: false },
    { id: 2, message: 'Server maintenance scheduled at 3 AM', type: 'warning', read: false },
    { id: 3, message: 'Payment received from customer XYZ', type: 'success', read: true },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>
                Notifications{' '}
                <Badge bg="primary">{notifications.filter(n => !n.read).length} Unread</Badge>
              </Card.Title>

              {notifications.length === 0 ? (
                <p className="text-muted text-center">No new notifications.</p>
              ) : (
                <ListGroup>
                  {notifications.map((notif) => (
                    <ListGroup.Item
                      key={notif.id}
                      variant={notif.read ? 'light' : 'secondary'}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <span>{notif.message}</span>
                      <div>
                        {!notif.read && (
                          <Button
                            variant="success"
                            size="sm"
                            className="me-2"
                            onClick={() => markAsRead(notif.id)}
                          >
                            Mark as Read
                          </Button>
                        )}
                        <Badge bg={notif.type === 'success' ? 'success' : notif.type === 'warning' ? 'warning' : 'info'}>
                          {notif.type}
                        </Badge>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}

              {notifications.length > 0 && (
                <div className="text-center mt-3">
                  <Button variant="danger" onClick={clearNotifications}>
                    Clear All Notifications
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;

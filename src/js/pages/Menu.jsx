import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = ({ orders }) => {

    return (
        <Container>
            <Col>
                {orders.map((order) => (
                    <Row className="row-md-4" key={order.id}>
                        <Link to={`/orderSelected/${order.id}`}>
                            <Card className="mb-4">
                                <Card.Body className="card-body">
                                    <Card.Title>
                                        Order #{order.id}
                                    </Card.Title>
                                    <p><strong>Incident Date/Time:</strong> {order.incidentDateTime}</p>
                                    <p><strong>Incident Location:</strong> {order.incidentLocationLat} N, {order.incidentLocationLng} W, </p>
                                    <p><strong>Destination Location:</strong> {order.destinationLocationLat} N, {order.destinationLocationLng} W</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Row>
                ))}
            </Col>
        </Container>
    );
};

export default Menu;
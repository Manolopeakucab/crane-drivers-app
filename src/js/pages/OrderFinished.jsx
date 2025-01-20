import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderFinished = ({ ratePerKM, extraCosts, total }) => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>¡Orden finalizada!</h1>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h4>Factura</h4>
                    <p>Tarifa por KM: ${ratePerKM}</p>
                    <p>Costos extra: ${extraCosts}</p>
                    <p>Total: ${total}</p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Link to="/">
                        <Button variant="primary">
                            Volver al menú
                        </Button>
                </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderFinished;
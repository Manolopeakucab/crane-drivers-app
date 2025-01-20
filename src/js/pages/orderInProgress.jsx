import React from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { useNavigate, useParams } from 'react-router-dom';

const OrderInProgress = () => {
    
        const navigate = useNavigate();
        const { orderId } = useParams();

        const order = {
            id: 1,
            contract: "Contract A",
            driverAssigned: "Driver 1",
            operator: "Operator 1",
            incidentLocationLat: 53.54992,
            incidentLocationLng: 10.00678,
            destinationLocationLat: 53.54292,
            destinationLocationLng: 10.10678,
            incidentDateTime: "2023-10-01T10:00:00Z",
            totalCost: 1000,
            extraCostApplied: 50,
            ratesPerKm: 5,
            orderStatus: "Pending"
        };
    
    return (
        <Container className="text-center mt-5">
            <Row className="justify-content-center">
                <APIProvider apiKey={'AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4'}>
                    <Map
                        style={{width: '90%', height: '250px'}}
                        defaultCenter={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}}
                        defaultZoom={10}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}>
                        <Marker position={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}} label="Incident Location" />
                        <Marker position={{lat: order.destinationLocationLat, lng: order.destinationLocationLng}} label="Destination Location" />
                    </Map>
                </APIProvider>
            </Row>
            <Row>
                <Col>
                    <h3 className="mt-3">Orden {orderId} en progreso</h3>
                    <Spinner animation="border" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Button variant="danger">Cancelar orden</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderInProgress;
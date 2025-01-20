import React from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import RateKMModal from '../components/ratekm/rateKMModal';
import AddExtraCostModal from '../components/extracost/addExtraCostModal';
import { useNavigate, useParams } from 'react-router-dom';

const OrderSelected = () => {

    const navigate = useNavigate();
    const { orderId } = useParams();
    console.log("yeah" + orderId);

    const order = {
        id: 1,
        contract: "Contract A",
        driverAssigned: "Driver 1",
        operator: "Operator 1",
        incidentLocationLat: 53.54992,
        incidentLocationLng: 10.00678,
        destinationLocationLat: 54.54992,
        destinationLocationLng: 10.10678,
        incidentDateTime: "2023-10-01T10:00:00Z",
        totalCost: 1000,
        extraCostApplied: 50,
        ratesPerKm: 5,
        orderStatus: "Pending"
    };

    const extraCosts = [
        { id: 1, name: 'Fuel Surcharge', price: 50, description: 'Additional fuel cost due to long distance' },
        { id: 2, name: 'Toll Charges', price: 20, description: 'Toll charges for highways' },
        { id: 3, name: 'Loading/Unloading', price: 30, description: 'Cost for loading and unloading the goods' }
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h2>Orden {orderId}</h2>
                        </Col>
                        <Col className="justify-content-md-end">
                            <RateKMModal />
                        </Col>
                    </Row>
                    <APIProvider apiKey={'AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4'}>
                        <Map
                        style={{width: '90%', height: '250px'}}
                        defaultCenter={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}}
                        defaultZoom={6}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}>
                            <Marker position={{lat: order.incidentLocationLat, lng: order.incidentLocationLng}} label="Incident Location" />
                            <Marker position={{lat: order.destinationLocationLat, lng: order.destinationLocationLng}} label="Destination Location" />
                        </Map>
                    </APIProvider>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Card className="my-4 mx-3" style={{ width: "90%" }}>
                    <Card.Body className="card-body">
                        <Card.Title>
                            Contrato del cliente
                        </Card.Title>
                        <p>Placeholder</p>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col xs={10}><h2>Agregar costo extra</h2></Col>
                <Col xs={2}>
                    <AddExtraCostModal />
                </Col>
            </Row>
            <Row>
                {extraCosts.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {extraCosts.map((cost) => (
                                <tr key={cost.id}>
                                    <td>{cost.name}</td>
                                    <td>{cost.price}</td>
                                    <td>{cost.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>Sin costos extra agregados</p>
                )}
            </Row>
            <Row>
                <Col>
                    <Button variant="success" onClick={() => navigate(`/orderInProgress/${orderId}`)}>Aceptar orden</Button>
                    <Button variant="danger" onClick={() => console.log('Order cancelled')} className="ml-2">Cancelar orden</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderSelected;
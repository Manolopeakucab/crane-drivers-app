import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const OrderSelected = ({ order }) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Order Location</h2>
                    <APIProvider apiKey={'AIzaSyCBZK2rXSKMDn9vM9d7f9LJ4G-MHwywJW4'}>
                        <Map
                        style={{width: '50%', height: '300px'}}
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
        </Container>
    );
};

export default OrderSelected;
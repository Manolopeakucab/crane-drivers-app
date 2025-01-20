import React, { useState } from 'react';
import { Button, Table, Container } from 'react-bootstrap';

const ExtraCost = () => {
    const [extraCosts, setExtraCosts] = useState([]);

    const addExtraCost = () => {
        // Logic to add extra cost
        const newCost = { name: 'New Cost', cost: 0, description: 'Description' };
        setExtraCosts([...extraCosts, newCost]);
    };

    return (
        <Container>
            <h1>Agregar costo extra</h1>
            <Button onClick={addExtraCost}>Add Extra Cost</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {extraCosts.map((cost, index) => (
                        <tr key={index}>
                            <td>{cost.name}</td>
                            <td>{cost.cost}</td>
                            <td>{cost.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ExtraCost;
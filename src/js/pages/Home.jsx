import React from "react";
import { Route, Routes, NavLink } from 'react-router-dom';

import Menu from "./Menu";
import OrderSelected from "./OrderSelected";
import OrderInProgress from "./orderInProgress";
import Login from "./Login";

//create your first component
const Home = () => {

	const orders = [
		{
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
		},
		{
			id: 2,
			contract: "Contract B",
			driverAssigned: "Driver 2",
			operator: "Operator 2",
			incidentLocationLat: 53.54992,
			incidentLocationLng: 10.00678,
			destinationLocationLat: 54.54992,
			destinationLocationLng: 10.10678,
			incidentDateTime: "2023-10-02T11:00:00Z",
			totalCost: 1500,
			extraCostApplied: 75,
			ratesPerKm: 6,
			orderStatus: "Completed"
		},
		{
			id: 3,
			contract: "Contract C",
			driverAssigned: "Driver 3",
			operator: "Operator 3",
			incidentLocationLat: 53.54992,
			incidentLocationLng: 10.00678,
			destinationLocationLat: 54.54992,
			destinationLocationLng: 10.10678,
			incidentDateTime: "2023-10-03T12:00:00Z",
			totalCost: 2000,
			extraCostApplied: 100,
			ratesPerKm: 7,
			orderStatus: "In Progress"
		}
	];
	return (
		<>
			<Routes>
				<Route index element={ <Menu orders={orders}/>} />
				<Route path="/orderSelected/:orderId" element={<OrderSelected />} />
				<Route path="/orderInProgress/:orderId" element={<OrderInProgress order={orders[1]}/>} />
				<Route path="/orderFinished/:orderID" element={<Menu orders={orders}/>} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<footer>
				<NavLink to="/login">Login (si)</NavLink>
				<NavLink to="/orderInProgress">Usuarios</NavLink>
				<NavLink to="/orderFinished">Proveedores</NavLink>
			</footer>
		</>
	);
};

export default Home;
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/index.css';
import "leaflet/dist/leaflet.css"

const ChartMap = () => {
	const position = [4.7098241, -74.0778432]
	return (
		<>
			<MapContainer center={position} zoom={12}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position} >
					<Popup> Block Master</Popup>
				</Marker>
			</MapContainer>
		</>
	);
};
export default ChartMap;

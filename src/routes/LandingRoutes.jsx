import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Contact from '../components/Contact';
import Home from '../components/Home';
import NavbarP from '../components/NavbarP';
import Search from '../components/Search';

const LandingRoutes = () => {
	return (
		<>
			<NavbarP />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/search" element={<Search />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};
export default LandingRoutes;
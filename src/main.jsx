import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';
import AIOps from './Pages/AI-Ops.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

function AppRoutes() {
	const location = useLocation();
	const path = location.pathname.replace(/^\/+/, '');
	const firstSegment = path.split('/')[0] || 'Home';

	const segmentToPageName = {
		'': 'Home',
		'Home': 'Home',
		'Products': 'Products',
		'AI-Ops': 'AI-Ops',
		'About': 'About',
		'Contact': 'Contact',
	};
	const currentPageName = segmentToPageName[firstSegment] || 'Home';

	return (
		<Layout currentPageName={currentPageName}>
			<Routes>
				<Route path="/" element={<Navigate to="/Home" replace />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Products" element={<Products />} />
				<Route path="/AI-Ops" element={<AIOps />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
}

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</React.StrictMode>
);

import React from 'react';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import RatngView from '../RatingViev/RatingViev';
import SummaryView from '../Summary/Summary';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' Component={RatngView} />
					<Route path='/succes' Component={SummaryView} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

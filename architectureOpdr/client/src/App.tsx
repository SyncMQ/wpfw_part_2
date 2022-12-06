import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AttractieLijst from './components/attracties/AttractieLijst';
import VoegAttractieToe from './components/attracties/VoegAttractieToe';
import Home from './components/Home';
import NavMenu from './components/NavMenu';
import Suggestie from './components/suggesties/Suggestie';
function App() {

	return (
		<div>
			<NavMenu />
			<div className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route element={<Suggestie />} path="/suggestie" />
					<Route element={<AttractieLijst />} path="/attracties" />
					<Route element={<VoegAttractieToe />} path="/attractieToevoegen" />
					{/* <Route component={() => (<div>Deze pagina bestaat nog niet. Het is leerzaam deze pagina te maken.</div>)} path="/pasAttractieAan" /> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;

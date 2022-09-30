// components

import { Route, Routes } from 'react-router';
import App2 from './pages/App2';
import CallbackRef from './pages/CallbackRef';
import FetchingData from './pages/FetchingData';
import GetPokemonApi from './pages/GetPokemonApi';
import ServerDataAPI from './pages/ServerDataAPI';
import SwrTest from './pages/SwrTest';
import SWRTest2 from './pages/SWRTest2';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/callbackref" element={<CallbackRef />} />
				<Route path="/data" element={<FetchingData />} />
				<Route path="/state" element={<App2 />} />
				<Route path="/swr" element={<SwrTest />} />
				<Route path="/swr2" element={<SWRTest2 />} />
				<Route path="/pokemon" element={<GetPokemonApi />} />
				<Route path="/" element={<ServerDataAPI />} />
			</Routes>
		</div>
	);
}

export default App;

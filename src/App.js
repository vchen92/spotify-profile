import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import './App.css';

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';

		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
		}
	}, []);

	return <div className="app">{token ? <h1>Logged In</h1> : <Login />}</div>;
}

export default App;

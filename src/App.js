import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { useDataLayerValue } from './hoc/DataLayer/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';

		const _token = hash.access_token;

		if (_token) {
			dispatch({ type: 'SET_TOKEN', token: _token });

			spotify.setAccessToken(_token);

			spotify.getMe().then(user => {
				console.log('person', user);
				dispatch({ type: 'SET_USER', user });
			});
		}
	}, []);

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;

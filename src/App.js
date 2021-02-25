import React, { useEffect } from 'react';
import Login from './pages/Login/Login';
import { getTokenFromUrl } from './spotify';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './pages/Player/Player';
import { useDataLayerValue } from './hoc/DataLayer/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';

		const _token = hash.access_token;

		if (_token) {
			dispatch({ type: 'SET_TOKEN', token: _token });

			spotify.setAccessToken(_token);

			spotify.getMe().then(_user => {
				console.log('person', _user);
				dispatch({ type: 'SET_USER', user: _user });
			});

			spotify.getUserPlaylists().then(playlists => {
				dispatch({ type: 'SET_PLAYLISTS', playlists });
			});

			spotify.getPlaylist('37i9dQZEVXcKlouC0S7b22').then(playlist => {
				dispatch({
					type: 'SET_PLAYLIST',
					playlist: playlist,
				});
			});
		}
	}, [dispatch]);

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;

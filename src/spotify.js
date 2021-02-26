export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://vc-spotify-profile.web.app/';
//const redirectUri = 'http://localhost:3000/';
const clientId = 'd3ef4e8b1dc647a091cffd674641f7f6';

// https://developer.spotify.com/documentation/general/guides/scopes/
const scopes = [
	'user-read-recently-played',
	'user-top-read',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token`;

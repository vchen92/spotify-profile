export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token:
		'BQBr9Dgxw2iQp_OepJFH17cfXiwcVstKbpN70w-qj3Ms4SynUp…ZLR5qUqJRIJ7N_C0pMnbgcx2ktm0uEWJtT4dEI95LhjokT7C_',
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		default:
			return state;
	}
};

export default reducer;

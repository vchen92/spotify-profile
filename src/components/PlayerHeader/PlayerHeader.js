import { Avatar } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './PlayerHeader.css';
import { useDataLayerValue } from './../../hoc/DataLayer/DataLayer';

function PlayerHeader() {
	const [{ user }] = useDataLayerValue();

	return (
		<div className="playerHeader">
			<div className="playerHeader__left">
				<SearchIcon />
				<input
					type="text"
					placeholder="Search for Artists, Songs, or Albums"
				/>
			</div>
			<div className="playerHeader__right">
				<Avatar src={user?.images[0].url} alt={user?.display_name} />
				<h4>{user?.diplay_name}</h4>
			</div>
		</div>
	);
}

export default PlayerHeader;

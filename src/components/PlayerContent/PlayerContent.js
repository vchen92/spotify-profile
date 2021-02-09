import React from 'react';
import './PlayerContent.css';
import PlayerHeader from './../PlayerHeader/PlayerHeader';

function PlayerContent({ spotify }) {
	return (
		<div className="playerContent">
			<PlayerHeader />
		</div>
	);
}

export default PlayerContent;

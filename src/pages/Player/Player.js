import React from 'react';
import './Player.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import PlayerContent from '../../components/PlayerContent/PlayerContent';
import PlayerControls from '../../components/PlayerControls/PlayerControls';

function Player({ spotify }) {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<PlayerContent />
			</div>

			<PlayerControls />
		</div>
	);
}

export default Player;

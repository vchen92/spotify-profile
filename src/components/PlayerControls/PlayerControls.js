import React from 'react';
import './PlayerControls.css';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function PlayerControls() {
	return (
		<div className="playerControls">
			<div className="playerControls__left">
				<img className="playerControls__albumLogo" src="" alt="" />
				<div className="playerControls__songInfo">
					<h4>Yeah!</h4>
					<p>Usher</p>
				</div>
			</div>
			<div className="playerControls__center">
				<ShuffleIcon className="playerControls__green" />
				<SkipPreviousIcon className="playerControls__icon" />
				<PlayCircleOutlineIcon
					fontSize="large"
					className="playerControls__icon"
				/>
				<SkipNextIcon className="playerControls__icon" />
				<RepeatIcon className="playerControls__green" />
			</div>
			<div className="playerControls__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default PlayerControls;

import React, { useEffect, useState } from 'react';
import './PlayerControls.css';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import { useDataLayerValue } from './../../hoc/DataLayer/DataLayer';

function PlayerControls({ spotify }) {
	const [{ item, playing }, dispatch] = useDataLayerValue();
	const [value, setValue] = useState(30);

	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
		console.log(newValue);
		spotify.setVolume(value);
	};

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then(r => {
			dispatch({
				type: 'SET_PLAYING',
				playing: r.is_playing,
			});

			dispatch({
				type: 'SET_ITEM',
				item: r.item,
			});
		});
	}, [spotify, dispatch]);

	const handlePlayPause = () => {
		if (playing) {
			spotify.pause();
			dispatch({
				type: 'SET_PLAYING',
				playing: false,
			});
		} else {
			spotify.play();
			dispatch({
				type: 'SET_PLAYING',
				playing: true,
			});
		}
	};

	const skipNext = () => {
		spotify.skipToNext();
		spotify.getMyCurrentPlayingTrack().then(r => {
			dispatch({
				type: 'SET_ITEM',
				item: r.item,
			});
			dispatch({
				type: 'SET_PLAYING',
				playing: true,
			});
		});
	};

	const skipPrevious = () => {
		spotify.skipToPrevious();
		spotify.getMyCurrentPlayingTrack().then(r => {
			dispatch({
				type: 'SET_ITEM',
				item: r.item,
			});
			dispatch({
				type: 'SET_PLAYING',
				playing: true,
			});
		});
	};

	return (
		<div className="playerControls">
			<div className="playerControls__left">
				<img
					className="playerControls__albumLogo"
					src={item?.album.images[0].url}
					alt={item?.name}
				/>
				{item ? (
					<div className="playerControls__songInfo">
						<h4>{item.name}</h4>
						<p>
							{item.artists.map(artist => artist.name).join(', ')}
						</p>
					</div>
				) : (
					<div className="playerControls__songInfo">
						<h4>No song is playing</h4>
						<p>...</p>
					</div>
				)}
			</div>

			<div className="playerControls__center">
				<ShuffleIcon className="playerControls__green" />
				<SkipPreviousIcon
					onClick={skipNext}
					className="playerControls__icon"
				/>
				{playing ? (
					<PauseCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="footer__icon"
					/>
				) : (
					<PlayCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize="large"
						className="footer__icon"
					/>
				)}
				<SkipNextIcon
					onClick={skipPrevious}
					className="playerControls__icon"
				/>
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
						<Slider
							value={value}
							onChange={(e, val) => setValue(val)}
							onChangeCommitted={handleSliderChange}
							aria-labelledby="continuous-slider"
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default PlayerControls;

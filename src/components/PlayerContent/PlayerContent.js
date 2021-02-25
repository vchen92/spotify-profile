import React from 'react';
import './PlayerContent.css';
import PlayerHeader from './../PlayerHeader/PlayerHeader';
import { useDataLayerValue } from './../../hoc/DataLayer/DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavouriteIcon from '@material-ui/icons/Favorite';
import SongRow from './../SongRow/SongRow';

function PlayerContent({ spotify }) {
	const [{ playlist }, dispatch] = useDataLayerValue();

	const playPlaylist = () => {
		spotify
			.play({
				context_uri: `spotify:playlist:${playlist.id}`,
			})
			.then(() => {
				setTimeout(() => {
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
				}, 200);
			});
	};

	const playSong = id => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then(() => {
				setTimeout(() => {
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
				}, 200);
			});
	};

	return (
		<div className="playerContent">
			<PlayerHeader spotify={spotify} />

			<div className="playerContent__info">
				<img src={playlist?.images[0].url} alt="" />
				<div className="playerContent__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{playlist?.description}</p>
				</div>
			</div>

			<div className="playerContent__songs">
				<div className="playerContent__icons">
					<PlayCircleFilledIcon
						className="playerContent__shuffle"
						onClick={playPlaylist}
					/>
					<FavouriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{playlist?.tracks.items.map(item => (
					<SongRow
						key={item.track.id}
						playSong={playSong}
						track={item.track}
					/>
				))}
			</div>
		</div>
	);
}

export default PlayerContent;

import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './../../hoc/DataLayer/DataLayer';
import './Sidebar.css';

function Sidebar({ spotify }) {
	const [{ playlists }, dispatch] = useDataLayerValue();

	const selectPlaylist = id => {
		spotify.getPlaylist(id).then(playlist => {
			dispatch({
				type: 'SET_PLAYLIST',
				playlist: playlist,
			});
		});
	};

	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt=""
			/>
			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchIcon} title="Search" />
			<SidebarOption Icon={LibraryMusicIcon} title="Library" />

			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />

			<div className="sidebar__playlists">
				{playlists?.items?.map(({ id, name }) => (
					<SidebarOption
						key={id}
						title={name}
						selectPlaylist={() => selectPlaylist(id)}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;

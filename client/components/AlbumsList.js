import React from 'react';
import Album from './Album';

const AlbumsList = React.createClass({
	render() {
		return (
			<div>
				{this.props.albums.map((album, i) => (<Album key={i} {...this.props} i={i} album={album} />))
				}
			</div>
			)
	}
});

export default AlbumsList;
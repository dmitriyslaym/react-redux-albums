import React from 'react';
import Album from './Album';

const AlbumInfo = React.createClass({
	render() {
		const { albumId } = this.props.params;
		const index = this.props.albums.findIndex((album) => album.id == albumId);
		const album = this.props.albums[index];
		return (
			<Album album={album} {...this.props} />
			)
		}
});

export default AlbumInfo;

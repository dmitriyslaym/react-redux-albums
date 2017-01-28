import React from 'react';
import Album from './Album';
import Comments from './Comments';

const AlbumInfo = React.createClass({
	render() {
		const { albumId } = this.props.params;
		const index = this.props.albums.findIndex((album) => album.id == albumId);
		const album = this.props.albums[index];
		return (
			<div className='wrapper'>
				<div className='albumInfo'>
					<div className='albumDetails'>
						<Album album={album} {...this.props} />
					</div>
					<div className='albumCommentsWrapper'>
						<Comments id={album.id} {...this.props} />
					</div>
				</div>
			</div>
			)
		}
});

export default AlbumInfo;

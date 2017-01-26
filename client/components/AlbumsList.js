import React from 'react';
import Album from './Album';

const AlbumsList = React.createClass({
	AddNewGenre() {
		this.props.AddNewGenre(this.props.albums);
	},
	render() {
		return (
			<div onClick={this.AddNewGenre}>
			<h2>Store can be used here, proof: {this.props.albums[0].title}</h2>
				{this.props.albums.map((album, i) => (<Album key={i} {...this.props} i={i} album={album} />))
				}
			</div>
			)
	}
});

export default AlbumsList;
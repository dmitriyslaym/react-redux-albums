import React from 'react';
import Album from './Album';

const AlbumsList = React.createClass({
	// componentDidUpdate() {
	// 	this.getAlbums();
	// },
	getAlbums() {
		const albums = this.props.albums;
		const filters = this.props.filters;
		let filteredAlbums = [];

		function getFilteredAlbums() {
			if (filters.length > 0) {
				filters.forEach((filter, i) => {
					let name = filter.name;
					const filterFunc = (album) => {
						if (typeof filter.value == 'number') {
							return album[name] >= filter.value;
						}
						else {
							return album[name] == filter.value;
						}
					}

					if (filter.value != 'all' && filter.value != '') {
						if (i == 0) {
							filteredAlbums = albums.filter(filterFunc);
						}
						else {
							filteredAlbums = filteredAlbums.filter(filterFunc);
						}						
					}
					else {
						filteredAlbums = albums;
					}
				});				
			}
			else {
				filteredAlbums = albums;
			}
		};

		getFilteredAlbums();
		return filteredAlbums.map((album, i) => (<Album key={i} {...this.props} i={i} album={album} />))
	},
	render() {
		return (
			<div>
			<h2>Store can be used here, proof: {this.props.albums[0].title}</h2>
				{this.getAlbums()}
			</div>
			)
	}
});

export default AlbumsList;
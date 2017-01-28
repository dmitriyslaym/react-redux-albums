import React from 'react';
import Album from './Album';
import NewAlbumForm from './NewAlbumForm';
import Filters from './Filters';

const AlbumsList = React.createClass({
	getInitialState() {
		return {
			showNewAlbumForm: false,
			showFilters: false
		};
	},
	toggleFilters() {
		this.setState({showFilters: !this.state.showFilters});
	},
	toggleNewAlbumForm() {
		this.setState({showNewAlbumForm: !this.state.showNewAlbumForm});
	},
	getAlbums() {
		const albums = this.props.albums;
		const filters = this.props.filters;
		let filteredAlbums = [];
		function getFilteredAlbums() {
			if (filters.length > 0) {
				filters.forEach((filter, i) => {
					let { value, name, criteria } = filter;
					const filterFunc = (album) => {
						if (criteria == 'number') {
							if (typeof value == 'number') {
								return album[name] >= value;
							}
							else {
								return true;
							}			
						}
						else if (criteria == 'selection') {
							if (value != 'all') {
								return album[name] == value;
							}
							else {
								return true;
							}							
						}
						else if (criteria == 'string') {
							let albumString = album[name].toLowerCase();
							let filterString = value.toLowerCase();
							if (value != '') {
								let equil = true;
								for (let i = 0; i < filterString.length; i++) {
									if (albumString.charAt(i) == filterString.charAt(i)) {
										equil = true;
									}
									else {
										equil = false;
										break;
									}
								};
								return equil;
							}
							else {
								return true;
							}
						}
					};
					if (i == 0) {
						filteredAlbums = albums.filter(filterFunc);
					}
					else {
						filteredAlbums = filteredAlbums.filter(filterFunc);
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
			<div className='wrapper'>
				<button className={"button " + (this.state.showNewAlbumForm ? "active" : "")} onClick={this.toggleNewAlbumForm}>
					{this.state.showNewAlbumForm ? 'Hide' : 'Show'} New Album Form
				</button>
				<button className={"button " + (this.state.showFilters ? "active" : "")} onClick={this.toggleFilters}>
					{this.state.showFilters ? 'Hide' : 'Show'} Filters
				</button>
				{this.state.showNewAlbumForm && <NewAlbumForm {...this.props} />}
				{this.state.showFilters && <Filters {...this.props} />}
				<div className='albumList'>
					{this.getAlbums()}
				</div>
			</div>
			)
	}
});

export default AlbumsList;
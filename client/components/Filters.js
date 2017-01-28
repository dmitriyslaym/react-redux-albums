import React from 'react';

const Filters = React.createClass({
	handleGenreSelect() {
		this.props.SetFilters(this.genre.name, this.genre.value, 'selection');
	},
	handleLikesSelect() {
		this.props.SetFilters(this.likes.name, +this.likes.value, 'number');
	},
	handleArtistSelect() {
		this.props.SetFilters(this.artist.name, this.artist.value, 'string');
	},
	handleTitleSelect() {
		this.props.SetFilters(this.title.name, this.title.value, 'string');
	},
	render() {
		return (
			<div className="formWrapper">
				<div className="inputWrapper">
					<label>Filter by genre</label>
					<select name="genre" ref={genre => this.genre = genre} onChange={this.handleGenreSelect}>
						<option value='all'>All</option>
						{this.props.genres.map((genre, i) => (<option value={genre} key={i}>{genre}</option>))}
					</select>
				</div>
				<div className="inputWrapper">
					<label>Filter by likes (more than...)</label>
					<input
					 type="text"
					 name="likes"
					 ref={likes => this.likes = likes}
					 onChange={this.handleLikesSelect} />
				</div>
				<div className="inputWrapper">
					<label>Filter by Artist</label>
					<input
					 type="text"
					 name="artist"
					 ref={artist => this.artist = artist}
					 onChange={this.handleArtistSelect} />
				</div>
				<div className="inputWrapper">
					<label>Filter by Album</label>
					<input
					 type="text"
					 name="title"
					 ref={title => this.title = title}
					 onChange={this.handleTitleSelect} />
				 </div>
			</div>
			)
	}
});

export default Filters;



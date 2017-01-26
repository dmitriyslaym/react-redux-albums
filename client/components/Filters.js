import React from 'react';

const Filters = React.createClass({
	handleGenreSelect() {
		this.props.SetFilters(this.genre.name, this.genre.value);
	},
	handleLikesSelect() {
		this.props.SetFilters(this.likes.name, +this.likes.value);
	},
	render() {
		return (
			<div>
				<label>Filter by genre</label>
				<select name="genre" ref={genre => this.genre = genre} onChange={this.handleGenreSelect}>
					<option value='all'>All</option>
					{this.props.genres.map((genre, i) => (<option value={genre} key={i}>{genre}</option>))}
				</select>
				<label>Filter by likes (more than...)</label>
				<input
				 type="text"
				 name="likes"
				 ref={likes => this.likes = likes}
				 onChange={this.handleLikesSelect} />
			</div>
			)
	}
});

export default Filters;



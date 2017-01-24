import React from 'react';

const NewAlbumForm = React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		const artist = this.refs.artist.value;
		const title = this.refs.title.value;
		const genre = this.refs.genre.value;
		const display_src = this.refs.display_src.value;
		this.props.AddAlbum(artist, title, genre, display_src);
		this.refs.newAlbumForm.reset();
	},
	render() {
		return (<div>
					<h2>Add New Album</h2>
					<form ref="newAlbumForm" onSubmit={this.handleSubmit}>
						<label>Artist</label>
						<input ref="artist" type="text" />
						<label >Title</label>
						<input ref="title" type="text" />
						<label>Genre</label>
						<input ref="genre" type="text" />
						<label>Cover Art (URL)</label>
						<input ref="display_src" type="text" />
						<button>Add New Album</button>
					</form>
				</div>
			)
	}
});

export default NewAlbumForm;
import React from 'react';

class NewAlbumForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const artist = this.refs.artist.value;
		const title = this.refs.title.value;
		const genre = this.refs.genre.value;
		const display_src = this.refs.display_src.value;
		this.props.AddAlbum(artist, title, genre, display_src);
		this.refs.newAlbumForm.reset();
	}
	render() {
		return (<div className="formWrapper">
					<form ref="newAlbumForm" onSubmit={this.handleSubmit}>
						<div className="inputWrapper">
							<label>Artist</label>
							<input ref="artist" type="text" />
						</div>
						<div className="inputWrapper">
							<label>Title</label>
							<input ref="title" type="text" />
						</div>
						<div className="inputWrapper">
							<label>Genre</label>
							<input ref="genre" type="text" />
						</div>
						<div className="inputWrapper">
							<label>Cover Art (URL)</label>
							<input ref="display_src" type="text" />
						</div>
						<div className="inputWrapper">
							<button className="button">Add New Album</button>
						</div>
					</form>
				</div>	
			)
	}
};

export default NewAlbumForm;
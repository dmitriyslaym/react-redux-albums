import React from 'react';
import { Link } from 'react-router';

const Album = React.createClass({
	render() {
		const { display_src, artist, title, likes, genre, id } = this.props.album;
		const { IncrementLikes} = this.props;
		const index = this.props.albums.indexOf(this.props.album);
		return (
			<div>
				<Link to={`/view/${id}`}>
					<img src={display_src}/>
				</Link>
				<p>{artist}</p>
				<p>{title}</p>
				<p>{genre}</p>
				<p onClick={IncrementLikes.bind(null, index)}>Likes: {likes}</p>
			</div>
			)
		}
});

export default Album;
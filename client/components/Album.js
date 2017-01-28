import React from 'react';
import { Link } from 'react-router';

const Album = React.createClass({
	render() {
		const { display_src, artist, title, likes, genre, id } = this.props.album;
		const { IncrementLikes} = this.props;
		const index = this.props.albums.indexOf(this.props.album);
		return (
			<div className='album'>
				<Link to={`/view/${id}`}>
					<div className="album__imgWrapper">
					<img className='album__img' src={display_src}/>
					</div>
				</Link>
				<p className="album__infoRow">{artist}</p>
				<p className="album__infoRow">{title}</p>
				<p className="album__infoRow">{genre}</p>
				<p className="album__infoRow"><span className="likeIcon" onClick={IncrementLikes.bind(null, index)}>&hearts;</span> Likes: {likes}</p>
			</div>
			)
		}
});

export default Album;
import React from 'react';
import { Link } from 'react-router';
import NewAlbumForm from './NewAlbumForm';

const Main = React.createClass({	
	render() {
		return (
			<div>
				<Link to='/'>
					<h1 className="appHeading">Albums Collection</h1>
				</Link>
				<NewAlbumForm {...this.props} />

				<label>Filter by genre</label>
				<select>
					{this.props.genres.map(genre => (<option value={genre} key={genre}>{genre}</option>))}
				</select>

				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>
			);
	}
});

export default Main;
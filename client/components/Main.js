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
				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>
			);
	}
});

export default Main;
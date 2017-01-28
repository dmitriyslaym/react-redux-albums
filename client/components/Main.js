import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	componentWillMount() {
		this.props.AddNewGenre(this.props.albums);
	},
	componentDidUpdate(nextProps) {
		if (this.props.albums.length != nextProps.albums.length) {
			this.props.AddNewGenre(this.props.albums);
		}		
	},
	render() {
		return (
			<div>
				<Link to='/'>
					<h1 className="appHeading">Albums Collection</h1>
				</Link>
				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>
			);
	}
});

export default Main;
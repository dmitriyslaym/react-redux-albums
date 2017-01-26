import React from 'react';

const Filters = (props) => (
	<div>
		<label>Filter by genre</label>
		<select>
			{props.genres.map((genre, i) => (<option value={genre} key={i}>{genre}</option>))}
		</select>
	</div>
	);

export default Filters;



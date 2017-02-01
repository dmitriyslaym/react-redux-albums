import React from 'react';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	console.log(state);
	return {
		albums: state.albums,
		comments: state.comments,
		genres: state.genres,
		filters: state.filters
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
};


const TestTest = (props) => (
	<div>
		{console.log(props)}
		<h1>Test555777</h1>
	</div>
	);



const TestTestConnected = connect(mapStateToProps, mapDispatchToProps)(TestTest);

export default TestTestConnected;


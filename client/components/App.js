import React from 'react';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import { connect } from 'react-redux';
import Main from './Main';


function mapStateToProps(state) {
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

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;


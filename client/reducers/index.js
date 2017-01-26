import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import albums from './albums';
import comments from './comments';
import genres from './genres'

const rootReducer = combineReducers({
	albums,
	comments,
	genres,
	routing: routerReducer
});

export default rootReducer;
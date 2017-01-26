import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import albums from './albums';
import comments from './comments';
import genres from './genres';
import filters from './filters';

const rootReducer = combineReducers({
	albums,
	comments,
	genres,
	filters,
	routing: routerReducer
});

export default rootReducer;
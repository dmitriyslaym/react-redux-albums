import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import albums from './albums';
import comments from './comments';

const rootReducer = combineReducers({
	albums,
	comments,
	routing: routerReducer
});

export default rootReducer;
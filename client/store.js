import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import albums from './data/albums';
import comments from './data/comments';

let defaultState = {};
const getDefaultState = function() {
	if (localStorage.getItem("AlbumsStore") == null) {
		defaultState = {
			albums,
			comments
		};
	}
	else {
		defaultState = JSON.parse(localStorage.getItem("AlbumsStore"));
	}
}
getDefaultState();

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export const setLocalStorage = (state, props) => {
	let toSave = {};
	props.forEach(p => toSave[p] = state[p]);
	localStorage.setItem('AlbumsStore', JSON.stringify(toSave));
};

export default store;
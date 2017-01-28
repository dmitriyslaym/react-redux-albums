import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// CSS
import css from './styles/style.styl';

// Components
import App from './components/App';
import AlbumsList from './components/AlbumsList';
import AlbumInfo from './components/AlbumInfo';
import Test from './components/Test';

import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={AlbumsList}></IndexRoute>
				<Route path='/view/:albumId' component={AlbumInfo}></Route>
				<Route path='/test' component={Test}></Route>
			</Route>
		</Router>
	</Provider>
	);

render(router, document.getElementById('root'));

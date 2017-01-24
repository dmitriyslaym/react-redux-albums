function albums(state=[], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
			let i = action.index;
			console.log(i);
			return [
				...state.slice(0, i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1)
			];
		case 'ADD_ALBUM':
			return [
				...state, {
					artist: action.artist,
					title: action.title,
					genre: action.genre,
					display_src: action.display_src,
					likes: 0,
					id: +new Date
				}
			];
		default:
			return state;
	};
};

export default albums;
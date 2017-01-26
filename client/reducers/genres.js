function genres(state=[], action) {
	switch (action.type) {
		case 'ADD_NEW_GENRE': 
			let genresAll = action.albums.map(album => album.genre);
			let genresUnique = [...new Set(genresAll)]; 
			console.log(genresUnique);
			return [
				...state, ...genresUnique
			];
		default:
			return state;	
	};
};

export default genres;
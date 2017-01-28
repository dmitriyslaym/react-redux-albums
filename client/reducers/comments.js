function comments(state=[], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			return [
				...state, {
					user: action.user,
					text: action.text,
					id: action.id,
					commentId: +new Date
				}
			];
		default: 
			return state;
	};
};

export default comments;
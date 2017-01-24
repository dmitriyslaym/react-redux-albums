function comments(state=[], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			let text = action.text;
			let user = action.user;
			console.log(text + ' ,' + user);
		default: 
			return state;
	};
};

export default comments;
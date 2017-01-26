function filters(state=[], action) {
	switch (action.type) {
		case 'SET_FILTERS':
			const changeFilter = (indexToChange) => (
				[
					...state.slice(0, indexToChange),
					Object.assign({}, state[indexToChange], {value: action.value}),
					...state.slice(indexToChange+1)
				]
			);
			const newFilter = () => (
				[
					...state, {
						name: action.name,
						value: action.value
					}
				]
			);
			function updateFilters() {
				if (state.length > 0) {
					let indexToChange;
					for (var i = 0; i < state.length; i++) {
						if (state[i].name == action.name) {
							indexToChange = i;
						}
					};
					if (indexToChange >= 0) {
						return changeFilter(indexToChange);				
					}	
					else {
						return newFilter();
					}				
				}
				else {
					return newFilter();
				}
			};
			return updateFilters();
		default:
			return state;
	};
};

export default filters;
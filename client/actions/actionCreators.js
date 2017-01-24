export function IncrementLikes(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
};

export function AddComment(text, user) {
	return {
		type: 'ADD_COMMENT',
		text,
		user
	};
};

export function AddAlbum(artist, title, genre, display_src) {
	return {
		type: 'ADD_ALBUM',
		artist,
		title,
		genre,
		display_src
	};
};
import React from 'react';
import NewCommentForm from './NewCommentForm.js';

class Comments extends React.Component {
	render() {
		const props = this.props;
		const getComments = function() {
			let commentsToAlbum = props.comments.filter(comment => comment.id == props.id);
			return commentsToAlbum.map((comment, i) => (
				<div className="albumCommentsWrapper__comment" key={i}>
					<p><span className="albumCommentsWrapper__user">{comment.user}</span> : <span className="albumComments__text">{comment.text}</span></p>
				</div>
				));
			};
		return (
			<div>
				<div className="albumCommentsWrapper__comments">
					{getComments()}
				</div>
				<NewCommentForm {...this.props} />
			</div>
			)
	}
};

export default Comments;
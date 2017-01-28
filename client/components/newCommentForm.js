import React from 'react';

class NewCommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.addComment = this.addComment.bind(this);
	}
	addComment(e) {
		e.preventDefault();
		this.props.AddComment(this.user.value, this.text.value, this.props.id);
		this.form.reset();
	}
	render() {
		return (
			<div className='newCommentBox'>
				<span className='newCommentBox__heading'>Add New Comment</span>
				<form ref={form => this.form = form} onSubmit={this.addComment}>
					<input ref={user => this.user = user} type="text" placeholder="Username" />
					<textarea ref={text => this.text = text}></textarea>
					<button className='button'>Leave a comment</button>
				</form>
			</div>
			)
	}
};

export default NewCommentForm;
import React from 'react'
const marked = require('marked');

const mdRenderer = new marked.Renderer();

class MarkdownFormat extends React.Component {

	getMarkup() {
		return {
			__html: marked(this.props.textInput, {renderer: mdRenderer})
		};
	}

	render() {
		return (
			<React.Fragment>
				<div
					style={{wordWrap: "break-word"}}
					id="preview"
					dangerouslySetInnerHTML={this.getMarkup()}
				/>
			</React.Fragment>
		)
	}
}

export default MarkdownFormat;
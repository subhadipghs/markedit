import React from 'react'
import { Divider, Button, Grid, Header, Segment, Form, TextArea } from 'semantic-ui-react'
import Emoji from './emoji';
import MarkdownFormat from './markdown-format';
import './editor.css';



class MarkdownEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			textInput: "Welcome **Pal**"
		};
		this.changeTextState = this.changeTextState.bind(this);
		this.resize = this.resize.bind(this);
		this.clearText = this.clearText.bind(this);
	}
		
	clearText(e) {
		// clear the text in the textarea
		this.setState({
			textInput: ''
		});			
	}

	changeTextState(e) {
		this.setState({
			textInput: e.target.value
		});
		// this.resize();
	}
	resize(e) {
		// resize the textarea 
		e.target.style.height = 'inherit';
		e.target.style.boxSizing = 'border-box';
    const computed = window.getComputedStyle(e.target);
    // Calculate the height in case it has padding and borders
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                 + parseInt(computed.getPropertyValue('padding-top'), 10)
                 + e.target.scrollHeight
                 + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                 + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    // set the height of the textarea
    e.target.style.height = `${height}px`;
	}

	render() {
		return (
			<Segment style={{minHeight: 500}}>
				<Grid columns={2} relaxed='very' stackable >
					<Grid.Column className="half-width">
						<Header as="h2" className='header'> 
							Editor
						</Header>
						<Form>
							<TextArea
								placeholder="Enter md to see the magic .."
								style={this.textareaStyle}
								onChange={this.changeTextState}
								onKeyDown={this.resize}
								value={this.state.textInput}
								id="editor"S
								tabIndex="0"
							/>
						</Form>
						<Button 
							style={{backgroundColor: 'red', color: 'white', margin: 10}}
							onClick={this.clearText}
						>
							Clear
						</Button>
					</Grid.Column>
					<Grid.Column className="half-width">
						<Header as="h2" className='header editor'>
							Markdown
						</Header>
						<MarkdownFormat 
							textInput={this.state.textInput}
						/>
					</Grid.Column>
				</Grid>
				<Divider vertical style={{fontSize: '2em'}}>
					<Emoji 
						ariaLable={'letter'}
						symbol="💌"
					/>
				</Divider>
			</Segment>
		)
	}
}


export default MarkdownEditor;

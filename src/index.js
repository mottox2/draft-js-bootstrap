import React from 'react'
import { render } from 'react-dom'

import {Editor, EditorState, RichUtils} from 'draft-js';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange(editorState) {
    this.setState({editorState})
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  render() {
    return <div>
      <h1>Draft.js example</h1>
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange.bind(this)}
        handleKeyCommand={this.handleKeyCommand.bind(this)}
      />
    </div>
  }
}

render(
  <App/>,
  document.getElementById('app')
)

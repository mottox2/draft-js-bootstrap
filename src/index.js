import React from 'react'
import { render } from 'react-dom'

import {Editor, EditorState} from 'draft-js';

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

  render() {
    return <div>
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange.bind(this)}
      />
    </div>
  }
}

render(
  <App/>,
  document.getElementById('app')
)

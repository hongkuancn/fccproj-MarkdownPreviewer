import React from 'react';
import marked from 'marked';

function parser(val){
  var val = marked(val);
  return {__html: val};
}

class Result extends React.Component {
  render(){
    return (
      <div dangerouslySetInnerHTML={parser(this.props.value)} />
    )
  }
};

export default class MP extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      textInput: `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e){
    this.setState({
      textInput: e.target.value
    })
  }

  render(){
    return (
      <div>
        <div>
          <p className="title">freeCodeCamp<br />Markdown Previewer</p>
        </div>
        <form className="container">
          <textarea className="box" placeholder="Type something here..." value={this.state.textInput} onChange={this.handleChange}/>
          <div className="box" id="result"><Result value={this.state.textInput}/></div>
        </form>
      </div>
    )
  }
};

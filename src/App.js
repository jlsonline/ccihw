import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.toggleClicked = this.toggleClicked.bind(this);
  }

  toggleClicked() {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    });
  }

  render() {
    const { clicked } = this.state;

    console.log(clicked);

    return (
      <div>
        <div>
          <input type="submit" value="ClickMe" onClick={this.toggleClicked} />
          </div>
          {clicked && (
            <div id="iclicked">
              Clicked
            </div>
          )}
        </div>
    );
  }
}

export default App;

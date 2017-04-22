import React from 'react';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Signup <small>Just to demo react-router</small></h1>
        </div>
        <p>To edit this component go to<code>./src/components/signup/index.js</code></p>
      </div>
    );
  }
}

import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Login <small>Just to demo react-router</small></h1>
        </div>
        <p>To edit this component go to<code>./src/components/login/index.js</code></p>
      </div>
    );
  }
}

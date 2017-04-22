import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="jumbotron">
          <h1>React Simple Starter</h1>
          <p>To edit this component go to<code>./src/components/home/index.js</code></p>
          <br/><br/>
          <p>
            When i first tasted React, the most difficult part for me was to setup a minimalistic react application that will suit my requirements.
            I know there are a lot of boilerplates available for react, but then, its tooo much boilerplate code that is not reuqired to setup a simple application
            that just displays some content on certain routes. Isnt it?
            <br/>
            I wrote this <code>React-Simple-Starter</code> to help people like me. If you are one of those, go to the docs and you will get everything in the code. Happy Coding...!!!
          </p>
          <p><Link className="btn btn-primary btn-lg" to="/docs" role="button">View Documentation »</Link></p>
      </div>
    );
  }
}

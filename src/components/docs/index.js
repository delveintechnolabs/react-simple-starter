import React from 'react';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Documentation <small>All the explanation you need</small></h1>
          <p>To edit this component go to<code>./src/components/docs/index.js</code></p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Core Dependencies</h2>
            <p>
              <ul>
                <li><code>react</code></li>
                <li><code>redux</code></li>
                <li><code>react-redux</code></li>
                <li><code>react-router</code></li>
                <li><code>react-dom</code></li>
                <li><code>axios</code></li>
                <li><code>redux-promise</code></li>
              </ul>
            </p>
          </div>
          <div className="col-md-6">
            <h2>Folder Structure</h2>
            <ul>
              <li><code>build</code></li>
              <li>
                <code>public</code>
                <ul>
                  <li><code>css</code></li>
                  <li><code>fonts</code></li>
                  <li><code>js</code></li>
                  <li><code>plugins</code></li>
                </ul>
              </li>
              <li>
                <code>server</code>
                <ul>
                  <li><code>views</code></li>
                </ul>
              </li>
              <li>
                <code>src</code> <span className="text-muted">[ Contains all the react code ]</span>
                <ul>
                  <li><code>actions</code></li>
                  <li><code>components</code></li>
                  <li><code>containers</code></li>
                  <li><code>reducers</code></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <hr/>
          <ul>
            <li>Server code is contained in <code>./server</code></li>
            <li>Main server file <code>./server/app.js</code></li>
            <li>Webpack puts the compiled bundle in <code>./build/bundle.js</code></li>
            <li>Files exposed to public are in <code>./public</code>. All the files in this folder will be accessible publicly</li>
            <li>Main entry point of react application <code>./src/index.js</code></li>
            <li>Route file <code>./src/routes.js</code></li>
            <li>Components folder <code>./src/components</code></li>
            <li>Containers folder <code>./src/containers</code></li>
            <li>All action creators are in <code>./src/actions/index.js</code></li>
            <li>All reducers are in <code>./src/reducers</code></li>
          </ul>
        </div>
      </div>
    );
  }
}

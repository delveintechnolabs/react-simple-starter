import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <p><i className="fa fa-pencil" /> Hannan Munshi <span className="text-primary">[ hannan@delveintechnolabs.com ]</span></p>
        <p>To edit this component go to<code>./src/components/skeleton/Footer.js</code></p>
      </footer>
    );
  }
}

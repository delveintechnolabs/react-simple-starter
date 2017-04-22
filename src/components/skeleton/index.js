import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Skeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
          <hr />
          <Footer />
        </div>
      </div>
    );
  }
}

const React = require('react');

import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';

export default class App extends React.Component {
  render() {
    return (
      <div className="custom-container">
          <Navbar />
          <Body />
          <Footer />
      </div>
    );
  }
}

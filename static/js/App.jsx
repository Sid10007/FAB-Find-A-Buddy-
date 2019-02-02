const React = require('react');

import Logobar from './Logobar';
import Footer from './Footer';
import Entry from './Entry';

export default class App extends React.Component {
  render() {
    return (
      <div className="custom-container">
          <Logobar />
          <Entry />
          
      </div>
    );
  }
}

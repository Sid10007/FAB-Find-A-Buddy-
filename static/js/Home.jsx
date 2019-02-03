const React = require('react')

import Logobar from './Logobar';
import Footer from './Footer';
import Inform from './Inform';

export default class Home extends React.Component {
  render() {
    return(
      <div class="home">
        <Logobar />
        <Inform />
        <Footer />
      </div>
    );
  }
}

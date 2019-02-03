const React = require('react');

export default class Navbar extends React.Component {
  render() {
    return(
      <div class='custom-navbar'>
        <img src='../static/images/logo.jpeg'/>
        <ul className="tabs">
          <li><a href="/entry-login">Login</a></li>
          <li><a href="/entry-register">Register</a></li>
        </ul>
      </div>
    )
  }
}

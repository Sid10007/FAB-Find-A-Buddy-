const React = require('react');

export default class Entry extends React.Component {
  render() {
    return(
      <div className='Entry'>
        <div id="active">
          <h2>Login</h2>
          <div class="highlight"></div>
          <form action="">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="username" class="form-control" id="login-username" placeholder="Enter username" name="username" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="login-pwd" placeholder="Enter password" name="pswd" />
            </div>
            <center><button type="submit" class="btn btn-primary">Login</button></center>
          </form>
        </div>
        <div id="inactive">
          <h2>Register</h2>
          <div class="highlight"></div>
          <form action="/register" method="post">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="name" class="form-control" id="register-name" placeholder="Enter name" name="name" />
            </div>
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="username" class="form-control" id="register-username" placeholder="Enter username" name="username" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="register-pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div class="form-group">
              <label for="pwd">Re-Enter Password:</label>
              <input type="password" class="form-control" id="check-register-pwd" placeholder="Re-Enter password" name="confirmpswd" />
            </div>
            <label for="gender">Gender:</label><br/>
            <div class="form-check-inline">
            <label class="form-check-label" for="radio1">
              <input type="radio" class="form-check-input" id="radio1" name="gender" value="Male" checked />Male
            </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label" for="radio2">
                <input type="radio" class="form-check-input" id="radio2" name="gender" value="Female" />Female
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" id="radio3" name="gender" value="Other" />Other
              </label>
            </div><br/>
            <div class="form-group">
              <label for="gender">Phone:</label>
              <input class="form-control" id="inputPhone" maxlength="10" name="phone" required="required" size="10" title="" type="text" />
            </div>
            <div class="form-group">
            <label for="AE1">Area of Expertise 1:</label>
              <select class="form-control" name="AE1" size="1">
                <option>Web Development</option>
                <option>Machine Learning</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Game Development</option>
                <option>Autocad</option>
                <option>Photoshop</option>
                <option>Photography</option>
                <option>Dance</option>
                <option>FL Studio</option>
              </select>
            </div>
            <div class="form-group">
            <label for="AE2">Area of Expertise 1:</label>
              <select class="form-control" name="AE2" size="1">
                <option>Web Development</option>
                <option>Machine Learning</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Game Development</option>
                <option>Autocad</option>
                <option>Photoshop</option>
                <option>Photography</option>
                <option>Dance</option>
                <option>FL Studio</option>
              </select>
            </div>
            <div class="form-group">
            <label for="AE3">Area of Expertise 2:</label>
              <select class="form-control" name="AE3" size="1">
                <option>Web Development</option>
                <option>Machine Learning</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Game Development</option>
                <option>Autocad</option>
                <option>Photoshop</option>
                <option>Photography</option>
                <option>Dance</option>
                <option>FL Studio</option>
              </select>
            </div>
            <div class="form-group">
            <label for="Al1">Area to Explore 3:</label>
              <select class="form-control" name="Al1" size="1">
                <option>Web Development</option>
                <option>Machine Learning</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Game Development</option>
                <option>Autocad</option>
                <option>Photoshop</option>
                <option>Photography</option>
                <option>Dance</option>
                <option>FL Studio</option>
              </select>
            </div>
            <div class="form-group">
            <label for="Al2">Area to Explore 2:</label>
              <select class="form-control" name="Al2" size="1">
                <option>Web Development</option>
                <option>Machine Learning</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Game Development</option>
                <option>Autocad</option>
                <option>Photoshop</option>
                <option>Photography</option>
                <option>Dance</option>
                <option>FL Studio</option>
              </select>
            </div>
            <div class="form-group">
            <label for="Al3">Area to Explore 3:</label>
              <select class="form-control" name="Al3" size="1">
                <option>Web Development</option>
                <option>Machine Learning</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Game Development</option>
                <option>Autocad</option>
                <option>Photoshop</option>
                <option>Photography</option>
                <option>Dance</option>
                <option>FL Studio</option>
              </select>
            </div>
            <center><button type="submit" class="btn btn-primary">Register</button></center>
          </form>
        </div>
      </div>
    );
  }
}

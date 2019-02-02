const React = require('react');

export default class Entry extends React.Component {
  render() {
    return(
      <div className='Entry'>
        <h2>Login</h2>
        <form action="">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="username" class="form-control" id="login-username" placeholder="Enter username" name="username" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="login-pwd" placeholder="Enter password" name="pswd" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <h2>Register</h2>
        <form action="">
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
            <input type="password" class="form-control" id="check-register-pwd" placeholder="Re-Enter password" name="pswd" />
          </div>
          <label for="gender">Gender:</label><br/>
          <div class="form-check-inline">
          <label class="form-check-label" for="radio1">
            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked />Male
          </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label" for="radio2">
              <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" />Female
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3" />Other
            </label>
          </div><br/>
          <div class="form-group">
            <label for="gender">Phone:</label>
            <input class="form-control" id="inputPhone" maxlength="10" name="phone" required="required" size="10" title="" type="text" />
          </div>
          <div class="form-group">
          <label for="sel-expertise">Area(s) of Expertise (hold shift to select more than one):</label>
            <select multiple class="form-control" id="sel-expertise" size="3">
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
          <label for="sel-explore">Area(s) to Explore (hold shift to select more than one):</label>
            <select multiple class="form-control" id="sel-explore" size="3">
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
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

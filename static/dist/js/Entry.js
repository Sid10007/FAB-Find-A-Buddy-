"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = require('react');

var Entry =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Entry, _React$Component);

  function Entry() {
    _classCallCheck(this, Entry);

    return _possibleConstructorReturn(this, _getPrototypeOf(Entry).apply(this, arguments));
  }

  _createClass(Entry, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "Entry"
      }, React.createElement("div", {
        id: "active"
      }, React.createElement("h2", null, "Login"), React.createElement("div", {
        class: "highlight"
      }), React.createElement("form", {
        action: ""
      }, React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "username"
      }, "Username:"), React.createElement("input", {
        type: "username",
        class: "form-control",
        id: "login-username",
        placeholder: "Enter username",
        name: "username"
      })), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "pwd"
      }, "Password:"), React.createElement("input", {
        type: "password",
        class: "form-control",
        id: "login-pwd",
        placeholder: "Enter password",
        name: "pswd"
      })), React.createElement("center", null, React.createElement("button", {
        type: "submit",
        class: "btn btn-primary"
      }, "Login")))), React.createElement("div", {
        id: "inactive"
      }, React.createElement("h2", null, "Register"), React.createElement("div", {
        class: "highlight"
      }), React.createElement("form", {
        action: "/register",
        method: "post"
      }, React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "name"
      }, "Name:"), React.createElement("input", {
        type: "name",
        class: "form-control",
        id: "register-name",
        placeholder: "Enter name",
        name: "name"
      })), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "username"
      }, "Username:"), React.createElement("input", {
        type: "username",
        class: "form-control",
        id: "register-username",
        placeholder: "Enter username",
        name: "username"
      })), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "pwd"
      }, "Password:"), React.createElement("input", {
        type: "password",
        class: "form-control",
        id: "register-pwd",
        placeholder: "Enter password",
        name: "pswd"
      })), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "pwd"
      }, "Re-Enter Password:"), React.createElement("input", {
        type: "password",
        class: "form-control",
        id: "check-register-pwd",
        placeholder: "Re-Enter password",
        name: "confirmpswd"
      })), React.createElement("label", {
        for: "gender"
      }, "Gender:"), React.createElement("br", null), React.createElement("div", {
        class: "form-check-inline"
      }, React.createElement("label", {
        class: "form-check-label",
        for: "radio1"
      }, React.createElement("input", {
        type: "radio",
        class: "form-check-input",
        id: "radio1",
        name: "gender",
        value: "Male",
        checked: true
      }), "Male")), React.createElement("div", {
        class: "form-check-inline"
      }, React.createElement("label", {
        class: "form-check-label",
        for: "radio2"
      }, React.createElement("input", {
        type: "radio",
        class: "form-check-input",
        id: "radio2",
        name: "gender",
        value: "Female"
      }), "Female")), React.createElement("div", {
        class: "form-check-inline"
      }, React.createElement("label", {
        class: "form-check-label"
      }, React.createElement("input", {
        type: "radio",
        class: "form-check-input",
        id: "radio3",
        name: "gender",
        value: "Other"
      }), "Other")), React.createElement("br", null), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "gender"
      }, "Phone:"), React.createElement("input", {
        class: "form-control",
        id: "inputPhone",
        maxlength: "10",
        name: "phone",
        required: "required",
        size: "10",
        title: "",
        type: "text"
      })), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "AE1"
      }, "Area of Expertise 1:"), React.createElement("select", {
        class: "form-control",
        name: "AE1",
        size: "1"
      }, React.createElement("option", null, "Web Development"), React.createElement("option", null, "Machine Learning"), React.createElement("option", null, "Python"), React.createElement("option", null, "JavaScript"), React.createElement("option", null, "Game Development"), React.createElement("option", null, "Autocad"), React.createElement("option", null, "Photoshop"), React.createElement("option", null, "Photography"), React.createElement("option", null, "Dance"), React.createElement("option", null, "FL Studio"))), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "AE2"
      }, "Area of Expertise 1:"), React.createElement("select", {
        class: "form-control",
        name: "AE2",
        size: "1"
      }, React.createElement("option", null, "Web Development"), React.createElement("option", null, "Machine Learning"), React.createElement("option", null, "Python"), React.createElement("option", null, "JavaScript"), React.createElement("option", null, "Game Development"), React.createElement("option", null, "Autocad"), React.createElement("option", null, "Photoshop"), React.createElement("option", null, "Photography"), React.createElement("option", null, "Dance"), React.createElement("option", null, "FL Studio"))), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "AE3"
      }, "Area of Expertise 2:"), React.createElement("select", {
        class: "form-control",
        name: "AE3",
        size: "1"
      }, React.createElement("option", null, "Web Development"), React.createElement("option", null, "Machine Learning"), React.createElement("option", null, "Python"), React.createElement("option", null, "JavaScript"), React.createElement("option", null, "Game Development"), React.createElement("option", null, "Autocad"), React.createElement("option", null, "Photoshop"), React.createElement("option", null, "Photography"), React.createElement("option", null, "Dance"), React.createElement("option", null, "FL Studio"))), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "Al1"
      }, "Area to Explore 3:"), React.createElement("select", {
        class: "form-control",
        name: "Al1",
        size: "1"
      }, React.createElement("option", null, "Web Development"), React.createElement("option", null, "Machine Learning"), React.createElement("option", null, "Python"), React.createElement("option", null, "JavaScript"), React.createElement("option", null, "Game Development"), React.createElement("option", null, "Autocad"), React.createElement("option", null, "Photoshop"), React.createElement("option", null, "Photography"), React.createElement("option", null, "Dance"), React.createElement("option", null, "FL Studio"))), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "Al2"
      }, "Area to Explore 2:"), React.createElement("select", {
        class: "form-control",
        name: "Al2",
        size: "1"
      }, React.createElement("option", null, "Web Development"), React.createElement("option", null, "Machine Learning"), React.createElement("option", null, "Python"), React.createElement("option", null, "JavaScript"), React.createElement("option", null, "Game Development"), React.createElement("option", null, "Autocad"), React.createElement("option", null, "Photoshop"), React.createElement("option", null, "Photography"), React.createElement("option", null, "Dance"), React.createElement("option", null, "FL Studio"))), React.createElement("div", {
        class: "form-group"
      }, React.createElement("label", {
        for: "Al3"
      }, "Area to Explore 3:"), React.createElement("select", {
        class: "form-control",
        name: "Al3",
        size: "1"
      }, React.createElement("option", null, "Web Development"), React.createElement("option", null, "Machine Learning"), React.createElement("option", null, "Python"), React.createElement("option", null, "JavaScript"), React.createElement("option", null, "Game Development"), React.createElement("option", null, "Autocad"), React.createElement("option", null, "Photoshop"), React.createElement("option", null, "Photography"), React.createElement("option", null, "Dance"), React.createElement("option", null, "FL Studio"))), React.createElement("center", null, React.createElement("button", {
        type: "submit",
        class: "btn btn-primary"
      }, "Register")))));
    }
  }]);

  return Entry;
}(React.Component);

exports.default = Entry;
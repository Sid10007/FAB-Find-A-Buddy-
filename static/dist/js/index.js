"use strict";

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(_App.default, null), document.getElementById('content'));
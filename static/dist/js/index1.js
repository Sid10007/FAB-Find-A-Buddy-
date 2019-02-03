"use strict";

var _Home = _interopRequireDefault(require("./Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(_Home.default, null), document.getElementById('content'));
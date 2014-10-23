/** @jsx React.DOM */
var React = require('react');
var appActions = require('../actions/app-actions.js');

var app = React.createClass({
  handleClick: function () {
    appActions.addItem('This is an item');
  },
  render: function () {
    return (
      <h1 onClick={this.handleClick}>Yo, React!</h1>
    );
  }
});

module.exports = app;
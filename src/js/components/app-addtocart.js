/**
 * @jsx React.DOM
 */
var React = require('react');
var AppActions = require('../actions/app-actions');

var AddToCart = React.createClass({
  handleClick: function () {
    AppActions.addItem(this.props.item);
  },
  render: function () {
    return (
      <button onClick={this.handleClick}>Add to Cart</button>
    );
  }
});

module.exports = AddToCart;
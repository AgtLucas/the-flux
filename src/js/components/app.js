/**
 * @jsx React.DOM
 */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');

var app = React.createClass({
  render: function () {
    return (
      <section className="app-section">
        <h1>Shop!</h1>
        <Catalog />
        <h1>Cart</h1>
        <Cart />
      </section>
    )
  }
});

module.exports = app;
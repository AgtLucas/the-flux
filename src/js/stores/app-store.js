// App store
var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var AppConstants = require('../constants/app-constants.js');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _catolog = [
  {id: 1, title: 'Widget #1', cost: 1},
  {id: 2, title: 'Widget #2', cost: 2},
  {id: 3, title: 'Widget #3', cost: 3}
];

var _cartItems = [];

// Remove item
function _removeItem(index) {
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
};

// Increase item
function _increaseItem(index) {
  _cartItems[index].qty++;
};

// Decrease item
function _decreaseItem(index) {
  if (_cartItems[index].qty > 1)
    _cartItems[index].qty--;
  else
    _removeItem(index);
};

// Add item
function _addItem(item) {
  if (!item.inCart) {
    item['qty'] = 1;
    item['inCart'] = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach(function (cartItem, i) {
      if (cartItem.id === item.id) {
        _increaseItem(i);
      }
    })
  }
}

// App Store !Apple App Store
var appStore = merge(EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart: function () {
    return _cartItems;
  },

  getCatalog: function () {
    return _catolog;
  },

  dispatcherIndex: AppDispatcher.register(function (playload) {
    var action = playload.action;
    switch(action.actionType) {
      case AppConstants.ADD_ITEM:
        _addItem(playload.action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        _removeItem(playload.action.index);
        break;

      case AppConstants.INCREASE_ITEM:
        _increaseItem(playload.action.index);
        break;

      case AppConstants.DECREASE_ITEM:
        _decreaseItem(playload.action.index);
        break;
    }

    appStore.emitChange();

    return true;
  })
});

module.exports = appStore;
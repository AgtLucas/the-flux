var appConstants = require('../constants/app-constants.js');
var appDispatcher = require('../dispatchers/app-dispatcher.js');

var appActions = {

  addItem: function (item) {
    appDispatcher.handleViewAction({
      actionType: appConstants.ADD_ITEM,
      item: item
    });
  },

  removeItem: function (index) {
    appDispatcher.handleViewAction({
      actionType: appConstants.REMOVE_ITEM,
      item: index
    });
  },

  increaseItem: function (index) {
    appDispatcher.handleViewAction({
      actionType: appConstants.INCREASE_ITEM,
      item: index
    });
  },

  decreaseItem: function (index) {
    appDispatcher.handleViewAction({
      actionType: appConstants.DECREASE_ITEM,
      item: index
    });
  }

};

module.exports = appActions;
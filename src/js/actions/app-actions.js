var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {

  addItem: function (item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  },

  removeItem: function (index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      item: index
    });
  },

  increaseItem: function (index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_ITEM,
      item: index
    });
  },

  decreaseItem: function (index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DECREASE_ITEM,
      item: index
    });
  }

};

module.exports = AppActions;
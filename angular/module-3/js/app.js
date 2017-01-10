(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  var criteria = null;
  list.criteria = null;
  list.found = null;

  list.search = function () {
    if( list.criteria ){
      var promise = MenuSearchService.getMatchedMenuItems(list.criteria);
      promise.then(function (response) {
        list.found = response;
      });
    }else {
      list.found = [];
    }
  };

  list.displayErrorMessage = function () {
    if( list.found == null ){
      return false;
    }else{
      return list.found.length == 0;
    }
  }

  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({url: 'https://davids-restaurant.herokuapp.com/menu_items.json'}).then(function (result) {
      function matchFilter(item){
        return item.description.indexOf(searchTerm) > -1;
      }
      var found = result.data.menu_items.filter(matchFilter);
      return found;
      });
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'results.html',
    restrict   : 'E',
    scope: {
      found: '<',
      criteria: '<',
      onRemove: '&',
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


})();

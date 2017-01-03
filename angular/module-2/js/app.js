(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;

  tobuy.items = ShoppingListCheckOffService.getItems();

  tobuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items
  var items = [
    {name: "Cookies", quantity: 10},
    {name: "Chips", quantity: 2},
    {name: "Beers", quantity: 6},
    {name: "Tomatoes", quantity: 4},
    {name: "Carrots", quantity: 2},
    {name: "Lettuce bags", quantity: 1}
  ];

  // List of bought items
  var bought = [];

  service.buyItem = function (index) {
    var item = items.splice(index, 1);
    bought.push(item[0]);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems= function () {
    return bought;
  };
}

})();

(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menu/templates/items-list.template.html',
  bindings: {
    items: '<'
  }
});

})();

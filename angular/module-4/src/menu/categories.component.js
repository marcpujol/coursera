(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menu/templates/category-list.template.html',
  bindings: {
    categories: '<'
  }
});

})();

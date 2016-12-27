(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = '';
  $scope.items = '';
  $scope.formStyle = '';

  $scope.checkItems = function () {
    var list = $scope.items.split(',').filter(String); // Filter empty strings/extra commas if any
    if (list.length == 0) {
      $scope.message = "Please enter data first";
      $scope.formStyle = 'has-error';
      $scope.messageStyle = 'text-danger';
    } else if (list.length < 4){
      $scope.message = "Enjoy!";
      $scope.formStyle = 'has-success';
      $scope.messageStyle = 'text-success';
    } else {
      $scope.message = "Too much!";
      $scope.formStyle = 'has-success';
      $scope.messageStyle = 'text-success';
    }
  };

  function elm(id){
    return document.getElementById('#'+id);
  }
}

})();

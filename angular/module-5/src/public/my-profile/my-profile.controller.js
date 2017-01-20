(function () {
"use strict";

angular.module('public')
.controller('MyProfileController', MyProfileController);

MyProfileController.$inject = ['info', 'ApiPath'];
function MyProfileController(info, ApiPath) {
  var $ctrl = this;
  $ctrl.info = info;
  $ctrl.baseUrl = ApiPath;
}


})();

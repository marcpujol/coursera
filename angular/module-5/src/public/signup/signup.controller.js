(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['ProfileService', 'MenuService'];
function SignupController(ProfileService, MenuService) {
  var $ctrl = this;
  $ctrl.first_name = ProfileService.first_name;
  $ctrl.last_name = ProfileService.last_name;
  $ctrl.email = ProfileService.email;
  $ctrl.phone = ProfileService.phone;
  $ctrl.favorite = ProfileService.favorite;

  $ctrl.submit = function(){
    MenuService.getMenuItem($ctrl.favorite).then(
      function (result){
        if( !result ){
          $ctrl.favorite_invalid = true;
          $ctrl.completed = false;
        }else{
          ProfileService.first_name = $ctrl.first_name;
          ProfileService.last_name = $ctrl.last_name;
          ProfileService.email = $ctrl.email;
          ProfileService.phone = $ctrl.phone;
          ProfileService.favorite = $ctrl.favorite;
          ProfileService.favoriteItem = result;
          $ctrl.completed = true;
          $ctrl.favorite_invalid = false;
        }
      }
    );
  };
}


})();

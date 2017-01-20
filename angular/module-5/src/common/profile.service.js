(function () {
"use strict";

angular.module('common')
.service('ProfileService', ProfileService);

function ProfileService() {
  var service = this;

  service.first_name = null;
  service.last_name = null;
  service.email = null;
  service.phone = null;
  service.favorite = null;
  service.favoriteItem = null;
}

})();

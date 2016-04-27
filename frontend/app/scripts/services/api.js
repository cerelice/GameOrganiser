'use strict';

angular.module('myAppApp').factory('APIService',
  ['$cookies', '$location', '$http', function($cookies, $location, $http) {
      var api_url = "http://0.0.0.0:3009";

      return {
        login: function(type, id){
            return $http({
                method: 'POST',
                url: api_url + "/login",
                data: {
                  id_type: type,
                  id_value: id
                }
            });
        },

      }
  }]);

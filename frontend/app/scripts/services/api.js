'use strict';

angular.module('myAppApp').factory('APIService',
  ['$cookies', '$location', '$http', function($cookies, $location, $http) {
      var api_url = "http://0.0.0.0:9999";

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

        getEvents: function(uid){
          return $http({
            method: 'GET',
            url: api_url + "/events/" + uid
          });
        },

        deleteEvent: function(eid){
          return $http({
            method: 'DELETE',
            url: api_url + '/devent/' + eid
          });
        },

        createEvent: function(desk, dat, uid){
          return $http({
            method: 'POST',
            url: api_url + '/event',
            data: {
              description: desk,
              date: dat,
              userId: uid
            }
          });
        }

      }
  }]);

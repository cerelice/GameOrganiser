'use strict';

angular.module('myAppApp').factory('VKService',
  ['$cookies', '$location', 'APIService', '$rootScope', function($cookies, $location, APIService, $rootScope) {
      VK.init({ apiId: 5360849 });
      var loadSemaphore = false;

      return {
        LogInEvent: function(){
          VK.Auth.login(this.LogInCallback);
        },
        LogInCallback: function(response){
          if( response.session ) {
            $rootScope.firstName = response.session.user.first_name;
            $rootScope.lastName = response.session.user.last_name;

            APIService.login('vk', response.session.user.id).then(function(resp){
              $rootScope.uid = resp.data.data;
              if(loadSemaphore) document.location = '/#/';
              else loadSemaphore = true;
            });

            VK.Api.call('users.get', {uids: response.session.user.id, fields: "photo_200_orig"}, function(r) {
              if(r.response) {
                $rootScope.uphoto = r.response[0].photo_200_orig;
                if(loadSemaphore) document.location = '/#/';
                else loadSemaphore = true;
              }
            });

          }
        }
      }
  }]);

'use strict';

angular.module('myAppApp').factory('VKService',
  ['$cookies', '$location', 'APIService', function($cookies, $location, APIService) {
      VK.init({ apiId: 5360849 });

      return {
        LogInEvent: function(){
          VK.Auth.login(this.LogInCallback);
        },
        LogInCallback: function(response){
          if( response.session ) {
            $cookies.put('user', response.session.user);
            APIService.login('vk', response.session.user.id).then(function(resp){
              console.log(resp);
            });
            document.location = '/#/';
          }
        }
      }
  }]);

'use strict';

angular.module('myAppApp').factory('VKService',
  ['$cookies', '$location', function($cookies, $location) {
      VK.init({ apiId: 5360849 });

      return {
        LogInEvent: function(){
          VK.Auth.login(this.LogInCallback);
        },
        LogInCallback: function(response){
          if( response.session ) {
            $cookies.put('user', response.session.user);
            document.location = '/#/';
          }
        }
      }
  }]);

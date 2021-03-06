'use strict';

angular.module('myAppApp', ['ngCookies', 'ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'
        })
        .when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'SigninCtrl',
            controllerAs: 'signin'
        })
        .when('/todolist', {
            templateUrl: 'views/todolist.html',
            controller: 'ToDoList',
            controllerAs: 'todolist'
        })
        .otherwise({redirectTo: '/'});
  });

//hide loader
angular.module('myAppApp').run(function(){
    setTimeout(function(){
      $(".loader").fadeOut("slow");
    }, 1000);
})

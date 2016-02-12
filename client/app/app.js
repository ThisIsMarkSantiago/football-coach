'use strict';

angular.module('footballCoachApp', [
  'footballCoachApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angular.filter'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

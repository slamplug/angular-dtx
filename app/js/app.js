'use strict';

/* App Module */

var dtxApp = angular.module('dtxApp', [
  'ngRoute',
  'dtxControllers',
  'dtxServices'
]);

dtxApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/period-summary.html',
        controller: 'PeriodSummaryCtrl'
      }).
      when('/item/:itemId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

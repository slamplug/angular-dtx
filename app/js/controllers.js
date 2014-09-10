'use strict';

/* Controllers */

var dtxControllers = angular.module('dtxControllers', []);

dtxControllers.controller('PeriodSummaryCtrl', ['$scope', 'PeriodSummary',
  function($scope, PeriodSummary) {
    $scope.periodItems = PeriodSummary.query();
    $scope.orderProp = 'id';
  }]);

/*phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
*/
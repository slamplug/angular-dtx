'use strict';

/* Controllers */

var dtxControllers = angular.module('dtxControllers', []);

dtxControllers.controller('PeriodSummaryCtrl', ['$scope', 'PeriodSummary',
    function ($scope, PeriodSummary) {
        $scope.periodItems = PeriodSummary.query();
        $scope.orderProp = 'id';

        $scope.addItem = function () {
            var len = $scope.periodItems.length + 1;
            $scope.periodItems.push({ 'id': len, 'categoryName': '', 'projectCode': '', 'taskId': '', 'quantity': 0 });
        };
        $scope.removeItem = function (id) {
            //alert( "remove item " + id );
            var index = -1;
            var comArr = eval( $scope.periodItems );
            for( var i = 0; i < comArr.length; i++ ) {
                if( comArr[i].id === id ) {
                    index = i;
                    break;
                }
            }
            $scope.periodItems.splice( index, 1 );
        };
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
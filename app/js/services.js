'use strict';

/* Services */

var dtxServices = angular.module('dtxServices', ['ngResource']);

dtxServices.factory('PeriodSummary', ['$resource',
  function($resource){
    return $resource('data/:periodId.json', {}, {
      query: {method:'GET', params:{periodId:'september'}, isArray:true}
    });
  }]);

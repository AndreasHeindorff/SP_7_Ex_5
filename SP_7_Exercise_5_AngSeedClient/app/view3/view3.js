'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl',
    controllerAs: 'ctrl'
  });
}])

.controller('View3Ctrl', function ($http, $scope) {
          $http({
            method: 'GET',
            url: 'api/allusers'
          }).then(function successCallback(res) {
            $scope.members = res.data;
          }, function errorCallback(res) {
            $scope.error = res.status + ": "+ res.data.statusText;
          });

        });
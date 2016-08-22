'use strict';

var module = angular.module('myApp.controllers', []);

module.controller('SearchIndexCtrl', ['$scope', '$rootScope', '$window', '$location', 'notify',
    function ($scope, $rootScope, $window, $location) {
        $scope.query = '';

        $scope.isValid = function() {
            return $scope.query.length > 0;
        };

        $scope.submitForm = function($event) {
            if ($scope.isValid()) {
                $location.path('/results/' + $scope.query);
            }
            $event.preventDefault();
        }
    }
]);

module.controller('SearchResultsCtrl', ['$scope', '$routeParams', 'Results', '$location', '$sce',
    function ($scope, $routeParams, Results, $location, $sce) {
        $scope.query = $routeParams.query;
        $scope.response = [];

        var retrieveData = function() {
            Results.query($scope.query, function(response) {
                console.log(response);
                $scope.response = response;
                $location.path('/results/' + $scope.query);
            });
        };

        $scope.isValid = function() {
            return $scope.query.length > 0;
        };

        $scope.submitForm = function($event) {
            retrieveData($scope.query);
            $event.preventDefault();
        };

        $scope.formatText = function(text) {
            return $sce.trustAsHtml(text);
        };

        $scope.isValidObject = function(item) {
            return typeof(item) === 'object' && item.text.length;
        };

        retrieveData($scope.query);
    }
]);

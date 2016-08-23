'use strict';

var module = angular.module('myApp.controllers', []);

module.controller('SearchIndexCtrl', function ($scope, $rootScope, $window, $location) {
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
);

module.controller('SearchResultsCtrl', function ($scope, $routeParams, Results, $location, $sce, lodash) {
        $scope.query = $routeParams.query;
        $scope.items = [];
        $scope.users = [];
        $scope.numPerPage = 20;
        $scope.noOfPages = 5;
        $scope.currentPage = 1;

        var retrieveData = function(offset, count) {
            Results.query($scope.query, offset, count, function(data) {
                if (typeof(data) === 'object') {
                    $scope.users = data.profiles;
                    $scope.items = data.wall;
                    $scope.noOfPages = $scope.items ? Math.ceil($scope.items[0] / $scope.numPerPage) : 0;
                } else {
                    $scope.users = [];
                    $scope.items = [];
                    $scope.noOfPages = 0;
                }
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
            text = text.replace(/\[(id\S+)\|(.*?)\]/g, '<a href="https://vk.com/$1">$2</a>');
            return $sce.trustAsHtml(text);
        };

        $scope.getUser = function(uid) {
            return lodash.find($scope.users, { uid: uid });
        };

        $scope.isUser = function(uid) {
            return uid > 0;
        };

        $scope.isValidObject = function(item) {
            return typeof(item) === 'object' && item.text.length;
        };

        $scope.setPage = function() {
            var offset = $scope.currentPage > 1 ? ($scope.currentPage - 1) * $scope.numPerPage : 0;
            $scope.items = retrieveData(offset, $scope.numPerPage);
        };

        $scope.$watch('currentPage', $scope.setPage);
    }
);

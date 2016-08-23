'use strict';

angular.module('myApp', [
    'ngRoute',
    'cgNotify',
    'ngLodash',
    'myApp.controllers',
    'myApp.services',
    'myApp.pagination'
]).

config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {templateUrl: 'views/index.html', controller: 'SearchIndexCtrl'});
    $routeProvider.when('/results/:query', {templateUrl: 'views/results.html', controller: 'SearchResultsCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]).

factory('VK', ['$http', '$httpParamSerializer',
    function($http, $httpParamSerializer) {
        return {
            request: function(method, params, callback) {
                var url = 'https://api.vk.com/method/' + method + '?' + $httpParamSerializer(params)
                    + '&callback=JSON_CALLBACK';
                $http.jsonp(url).success(function(data) {
                    callback(data.response);
                });
            }
        }
    }
]);

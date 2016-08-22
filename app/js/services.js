'use strict';

angular.module('myApp.services', ['myApp'])
    .factory('Results',
        function (VK) {
            return {
                query: function(query, callback) {
                    var params = {
                        domain: 'torez3',
                        query: query
                    };
                    return VK.request('wall.search', params, callback);
                }
            };
        });

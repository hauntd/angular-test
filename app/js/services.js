'use strict';

angular.module('myApp.services', ['myApp'])
    .factory('Results',
        function (VK) {
            return {
                query: function(query, offset, count, callback) {
                    var params = {
                        domain: 'torez3',
                        query: query,
                        offset: offset,
                        count: count,
                        extended: 1
                    };
                    return VK.request('wall.search', params, callback);
                }
            };
        });

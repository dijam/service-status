define(['app'], function(app) {

    return app.factory('FetchURLService', ['$http', function($http) {

        return {
            get: function() {
                var start = Date.now();

                return $http.get('/status').
                    success(function(data, status, headers, config) {
                        return {
                            data: data,
                            status: status,
                            headers: headers,
                            config: config,
                            duration: Date.now() - start
                        };

                }).error(function(data, status, headers, config) {
                    return {
                        data: data,
                        status: status,
                        headers: headers,
                        config: config,
                        duration: Date.now() - start
                    };
                });
            }
        };
    }]);

});
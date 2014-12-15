define(['app'], function(app) {

    return app.factory('LoadDataService', ['$http', 'localStorageService', function($http, localStorageService) {
        return {
            get: function() {
                var data = {};
                return $http.get('data/services.json').then(function (response) {
                    data = response.data;
                    localStorageService.add('services', data);
                    return data;
                });
            }
        };
    }]);
});
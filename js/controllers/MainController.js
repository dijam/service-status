require(['app'], function(app) {
    app.controller('MainController', ['$scope', 'FetchURLService', 'LoadDataService', function($scope, FetchURLService, LoadDataService) {

        LoadDataService.get().then(function (data) {
            $scope.services = data;
            console.log($scope.services);
        });
    }]);
});
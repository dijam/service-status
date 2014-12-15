require(['app', 'underscore'], function(app, _) {
    app.controller('MainController', ['$scope', 'FetchURLService', 'LoadDataService', function($scope, FetchURLService, LoadDataService) {
        var services = [];
        $scope.services = [];

            FetchURLService.get().then(function (result) {
                $scope.services = result.data;
            });
    }]);
});
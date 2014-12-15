define([
    'angularAMD',
    'angularBootstrap',
    'LocalStorageModule'],
    function(angularAMD) {
        var app = angular.module('MyApp',  ['ui.bootstrap', 'LocalStorageModule']);
        return angularAMD.bootstrap(app);
});
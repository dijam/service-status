require.config({
    paths: {
        angular: '../lib/angular/angular.min',
        jquery: '../lib/jquery/dist/jquery.min',
        bootstrap: '../bootstrap/dist/js/bootstrap.min',
        underscore: '../lib/underscore/underscore-min',
        angularAMD: '../lib/angularAMD/angularAMD.min',
        angularBootstrap: '../lib/angular-bootstrap/ui-bootstrap.min',
        LocalStorageModule: '../lib/angular-local-storage/dist/angular-local-storage.min',
    },

    shim: {
        'angularAMD': ['angular'],
        'bootstrap': {deps:['jquery']},
        'underscore': {exports: '_'},
        'angularBootstrap': {deps:['angular']},
        'LocalStorageModule': {deps:['angular']}
    },
    deps: ['app']
});

require([
    'controllers/MainController',
    'services/FetchURLService',
    'services/LoadDataService'
]);
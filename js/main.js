
require.config({
    paths: {
        jquery: '../lib/jquery/dist/jquery.min',
        underscore: '../lib/underscore/underscore-min',
        backbone: '../lib/backbone/backbone',
        hogan: '../lib/requirejs-hogan-plugin/hogan',
        text: '../lib/requirejs-hogan-plugin/text',
        hgn: '../lib/requirejs-hogan-plugin/hgn',
        bootstrap: '../bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: '$.fn.typeahead'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require([
    'jquery',
    'backbone'
], function ($, Backbone) {
    "use strict";

    var AppRouter, router, app;

    /**
     * Starts the new application.
     *
     * @param  {Object} newApp The new application.
     * @return {undefined}
     */
    function changeApp(newApp) {
        if (app) {
            app.stop();
        }

        newApp.start();
        app = newApp;
    }

    AppRouter = Backbone.Router.extend({
        routes: {
            '':        'default',
            'default': 'default'
        },

        /**
         * Route handler for index and default.
         *
         * @return {undefined}
         */
        default: function () {
            $('#spinner').show();
            require(['default/main'], changeApp);
        }
    });

    router = new AppRouter();
    if (!Backbone.history.start()) {
        // It could be a route defined by a application, attempt to load it
        // using the first part of the fragment as the app-name and then try
        // again.
        require(
            [Backbone.history.fragment.split('/')[0]],
            function (app) {
                changeApp(app);
                Backbone.history.loadUrl();
            });
    }
});
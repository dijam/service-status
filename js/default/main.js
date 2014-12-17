define([
    'jquery',
    'underscore',
    'backbone',
    './view/services',
    './collection/services'
], function ($, _, Backbone, ServiceView, ServiceCollection) {
    "use strict";

    var DefaultRouter,
        view,
        router;

    DefaultRouter = Backbone.Router.extend({
        routes: {}
    });

    router = new DefaultRouter();

    return {
        /**
         * Starts the default app.
         *
         * @return {undefined}
         */
        start: function () {
            $.getJSON('/status', function (rootJSON) {
                if (!rootJSON) {
                    throw new Error(
                        'Not enough data'
                    );
                }

                view = new ServiceView();

                view.render(rootJSON);
                view.$el.show();
                document.title = 'Service Status';
                $('#spinner').hide();
            });
        },

        /**
         * Stops the default app.
         *
         * @return {undefined}
         */
        stop: function () {
            view.$el.remove();
        }
    };
});

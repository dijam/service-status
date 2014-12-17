
define([
    'backbone',
    '../model/service'
], function (Backbone, Service) {
    "use strict";

    return Backbone.Collection.extend({
        url: '/status',
        model: Service
    });
});
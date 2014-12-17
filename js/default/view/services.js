
define([
    'jquery',
    'underscore',
    'backbone',
    'hgn!../template/services'
], function($, _, Backbone, template) {
    return Backbone.View.extend({
        el: $('#services'),
        render: function(data) {
            var self = this;
            _.each(data, function (service) {

                // Append our compiled template to this Views "el"
                self.$el.append(template(service));
            });
        }
    });
});
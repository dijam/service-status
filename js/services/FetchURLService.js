define(['app'], function(app) {

    return app.factory('FetchURLService', function() {
        var data = {message: 'majid'};
        return {
            get: function() {
                return data.message;
            }
        };
    });

});
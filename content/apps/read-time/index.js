var App = require('ghost-app'),
    readTime = require('read-time'),
    ReadTimeApp;

ReadTimeApp = App.extend({

    activate: function() {
        App.prototype.activate.apply(this, arguments);

        this.app.helpers.register('readTime', function(text, options) {
            return readTime(text).text;
        });
    }

});

module.exports = ReadTimeApp;
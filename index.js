// It's spooky time, Ghost time.

var ghost = require('ghost'),
    path  = require('path');

ghost({
  config: path.join(__dirname, 'config.js')
});


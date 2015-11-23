var readTime = require('read-time');

module.exports = function(Plugin) {
  Plugin.event.file.beforeRender(function(file) {
    if (file.collectionIds.has('post')) {
      file.data.readTime = readTime(file.content).text;
    }
  });
};

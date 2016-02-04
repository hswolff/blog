var readTime = require('read-time');

module.exports = function(Plugin) {
  Plugin.event.file.afterRender(function(file) {
    if (file.collectionIds.has('post')) {
      file.data.readTime = readTime(file.data.content).text;
    }
  });
};

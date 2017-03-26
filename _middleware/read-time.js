var readTime = require('read-time');

module.exports = function(reptar) {
  for (const fileKey in reptar.fileSystem.files) {
    const file = reptar.fileSystem.files[fileKey];
    if (file && file.data && file.data.content) {
      file.data.readTime = readTime(file.data.content).text;
    }
  }
};

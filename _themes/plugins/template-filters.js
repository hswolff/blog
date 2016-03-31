module.exports = function(Plugin) {
  [
    [
      'disqus_id',
      function(url) {
        // remove first and last '/'.
        return url ? url.replace(/^\//, '').replace(/\/$/, '') : '';
      }
    ],

    [
      'limit',
      function(arr, length) {
        return arr.slice(0, length);
      }
    ]
  ].forEach(filter => {
    Plugin.template.addFilter.apply(undefined, filter);
  });
};

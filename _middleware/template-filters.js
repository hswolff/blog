module.exports = reptar => {
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
    reptar.renderer.addTemplateFilter.apply(undefined, filter);
  });
}
// process.env.DEBUG = '*';
var gulp = require('gulp');
var swig = require('swig');
var createPost = require('./create-post');

var metalsmith = require('metalsmith');
var plugin = {};
plugin.drafts = require('metalsmith-drafts');
plugin.templates = require('metalsmith-templates');
plugin.markdown = require('metalsmith-markdown');
plugin.permalinks = require('metalsmith-permalinks');
plugin.tags = require('metalsmith-tags');
plugin.watch = require('metalsmith-watch');
plugin.collections = require('metalsmith-collections');
plugin.pagination = require('metalsmith-pagination');
plugin.ignore = require('metalsmith-ignore');
plugin.branch = require('metalsmith-branch');
plugin.excerpts = require('metalsmith-excerpts');
plugin.feed = require('metalsmith-feed');
plugin.htmlMinifier = require('metalsmith-html-minifier');
plugin.uglify = require('metalsmith-uglify');
plugin.less = require('metalsmith-less');
plugin.cleanCss = require('metalsmith-clean-css');
plugin.fingerprint = require('metalsmith-fingerprint');
plugin.wordCount = require('metalsmith-word-count');

/**
 * Add filter to output the absolute url for a given path and base path.
 * @param  {string} input path string
 * @param  {string} base  base path string
 * @return {string}       absolute url which accurately appends only one `/`.
 */
swig.setFilter('absolute_url', function (input, base) {
  base = base || '';
  var baseLength = base.length - 1;
  base = base[baseLength] === '/' ? base.substr(0, baseLength) : base;

  var inputLength = input.length - 1;
  if (input[inputLength] !== '/') {
    input = input + '/';
  }
  if (input[0] !== '/') {
    input = '/' + input;
  }

  return base + input;
});

/**
 * Given a pagination object it calculates the total number of items
 * in the pagination array.
 * @param  {Object} pagination
 * @return {number}
 */
swig.setFilter('pagination_total', function (pagination) {
  var total = 0;
  pagination.pages.forEach(function(page) {
    total += page.pagination.files.length;
  });
  return total;
});

function debug(files, metalsmith, done) {
  // console.log(files['index.html'].pagination.files[0]);
  // console.log(files['tag/code/index.html'].pagination.pages);
  // console.log(files);
  // console.log(Object.keys(files));
  // console.log(metalsmith.metadata());
  // console.log(Object.keys(metalsmith.metadata()));

  // for (var file in files) {
  //   if (isAsset.test(file)) {
  //     files[file.replace(isAsset, '')] = files[file];
  //     delete files[file];
  //   }
  // }
  done();
}

/**
 * Moves files that look like `assets/css/main.css`
 * to look like `css/main.css`.
 */
function unindentAssets(files, metalsmith, done) {
  var isAsset = /^assets\//;
  for (var file in files) {
    if (isAsset.test(file)) {
      files[file.replace(isAsset, '')] = files[file];
      delete files[file];
    }
  }
  done();
}

function createMetalsmith() {
  return metalsmith(__dirname)
    .source('src')
    .destination('build')
    .clean(true)
    .use(plugin.ignore([
        '.DS_Store',
        '**/*/.DS_Store',
        'templates/*'
    ]))
    .metadata({
      title: 'Harry Wolff',
      author: 'Harry Wolff',
      description: 'Personal blog of Harry Wolff (hswolff).',
      site: {
        title: 'Harry Wolff',
        description: 'Personal blog of Harry Wolff (hswolff).',
        url: 'http://blog.hswolff.com/'
      },
      url: {
        gravatar: 'http://www.gravatar.com/avatar/f863e9eb811851834773398e72614dc1?d=404'
      },
      disqus_url: 'blog.harrywolff.com'
    })
    .use(plugin.uglify({
      concat: 'assets/js/scripts.js'
    }))
    .use(plugin.less({
      pattern: 'assets/css/main.less',
      parse: {
        paths: 'src/assets/css/'
      }
    }))
    .use(plugin.cleanCss({
      files: 'assets/css/main.css'
    }))
    .use(unindentAssets)
    .use(plugin.fingerprint({
      pattern: ['js/scripts.js', 'css/main.css']
    }))
    .use(plugin.drafts())
    .use(plugin.markdown({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    }))
    .use(plugin.excerpts())
    .use(plugin.wordCount({
      speed: 200,
      seconds: true
    }))
    .use(plugin.collections({
      posts: {
        pattern: 'posts/**/*',
        sortBy: 'date_published',
        reverse: true
      }
    }))
    .use(plugin.pagination({
      'collections.posts': {
        perPage: 6,
        template: 'index.html',
        first: 'index.html',
        path: 'page/:num/index.html'
      }
    }))
    .use(plugin.tags({
      handle: 'tags',
      template: 'tag.html',
      path: 'tag/:tag/index.html',
      pathPage: 'tag/:tag/:num/index.html',
      perPage: 6,
      sortBy: 'date_published',
      reverse: true
    }))
    .use(plugin.permalinks({
      pattern: ':title'
    }))
    .use(plugin.templates({
      default: 'post.html',
      engine: 'swig',
      directory: 'src/templates',
      pattern: '**/*.html'
    }))
    .use(plugin.htmlMinifier())
    .use(plugin.feed({
      collection: 'posts',
      limit: 15,
      destination: 'rss.xml'
    }))
    .use(debug);
}

gulp.task('default', ['build']);

gulp.task('build', function(cb) {
  createMetalsmith()
    .build(cb);
});

gulp.task('serve', function(cb) {
  require('http-server').createServer({
    showDir: true,
    autoIndex: true,
    root: 'build'
  }).listen(8080, cb);
});

gulp.task('watch', ['serve'], function(cb) {
  createMetalsmith()
    .use(plugin.watch({
      pattern : '**/*.md',
      livereload: true
    }))
    .build(cb);
});

gulp.task('date', function(cb) {
  var time = new Date();
  console.log('Time now:\n' + time.toISOString());
  cb();
});

gulp.task('new', function(cb) {
  createPost.promptForParams(function(params) {
    createPost.writeNewFile(params, cb);
  });
});

// Allow for building as a node script and without gulp.
if (process.argv[1].match(/gulp$/) === null) {
  createMetalsmith()
    .build(function (err) {
      if (err) {
        throw err;
      }
      process.exit(0);
    });
}

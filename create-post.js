var path = require('path');
var fs = require('fs-extra');
var prompt = require('cli-prompt');
var swig = require('swig');

/**
 * Creates the new post path.
 * @param  {Date} date Date object.
 * @param  {string} slug Slug of post.
 * @return {string}      Full path to post.
 */
function createPostPath(date, slug) {
  var year = date.getUTCFullYear();
  var month = ('0' + (date.getUTCMonth() + 1)).slice(-2);
  var day = ('0' + date.getUTCDate()).slice(-2);

  return path.join(
    'src/posts/',
    ''+year,
    [year, month, day, slug].join('-')
  ) + '.md';
}

/**
 * Turns a regular sentence into a slug-friendly string.
 * @param  {string} input
 * @return {string}
 */
function createSlug(input) {
  return input.split(' ').map(function(input) {
    return input.toLowerCase();
  }).join('-');
}

/**
 * Prompts user for params for a new post, accepts a callback to handle the
 * user given input.
 * @param  {Function} cb
 */
exports.promptForParams = function(cb) {
  prompt.multi([
    {
      label: 'Title of blog post',
      key: 'title',
      type: 'string',
      validate: function(input) {
        return input.length > 0;
      }
    },
    {
      label: 'Tags',
      key: 'tags',
      type: 'string',
      default: ''
    },
    {
      label: 'Date (form of YYYY-MM-DD)',
      key: 'date',
      type: 'string',
    },
    {
      label: 'Draft?',
      key: 'draft',
      type: 'boolean',
    },
    {
      label: 'Is this ok?',
      key: 'accepted',
      type: 'boolean'
    }
  ], cb);
};

/**
 * Given some params it'll create a new post file.
 * @param  {Object} params
 * @param  {Function} cb Callback function to run on completion.
 */
exports.writeNewFile = function(params, cb) {
  if (params && !params.accepted) {
    console.log('\n');
    return exports.promptForParams(exports.writeNewFile);
  }

  var postDate = new Date();

  if (params.date) {
    var paramsDate = new Date(Date.parse(params.date));
    postDate.setUTCFullYear(paramsDate.getUTCFullYear());
    postDate.setUTCMonth(paramsDate.getUTCMonth());
    postDate.setUTCDate(paramsDate.getUTCDate());
  }

  var postDateString = postDate.toISOString();
  var titleAsSlug = createSlug(params.title);
  var postPath = createPostPath(postDate, titleAsSlug);

  var template = swig.compileFile('template.md');
  var output = template({
      title: params.title,
      slug: titleAsSlug,
      tags: params.tags,
      date_published: postDateString,
      date_updated: postDateString,
      draft: params.draft
  });

  fs.outputFile(postPath, output, 'utf8', cb);

  console.log('\nFile written: ' + postPath);
};

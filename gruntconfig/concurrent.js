'use strict';

var concurrent = {
  build: [
    'browserify:build',
    'compass:build',
    'copy:build'
  ],
  dist: [
    'htmlmin:dist',
    'uglify',
    'copy:dist',
    'cssmin:dist'
  ],
  test: [
    'browserify:test',
    'browserify:bundle',
    'copy:test'
  ]
};

module.exports = concurrent;
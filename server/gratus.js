(function () {
  'use strict';

  var koa = require('koa');
  var serve = require('koa-static');

  var config = require('./config');

  var gratus = module.exports = koa();

  gratus.use(serve('./public'));

  module.exports.config = config;
})();


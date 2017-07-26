let mix = require('laravel-mix');
const webpack = require('webpack');
var path = require('path');
var plugins = require('./npm/plugins');
var config = require('./npm/config');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 /*
 |--------------------------------------------------------------------------
 | Copy bower to vendor
 |--------------------------------------------------------------------------
 |
 |
 */
plugins.bower.map(function (bower) {
  //mix.copy(path.join(config.plugins.bower.in, bower.in), path.join(config.plugins.bower.out, bower.out), false);
});

/*
 |--------------------------------------------------------------------------
 |  Compiling Sass Backend to public
 |--------------------------------------------------------------------------
 |
 */
plugins.sass.map(function (sass) {
  mix.sass(path.join(config.plugins.sass.in, sass.in), path.join(config.plugins.sass.out, sass.out))
});

/*
 |--------------------------------------------------------------------------
 |  Compiling Vue Backend to public
 |--------------------------------------------------------------------------
 |
 */
plugins.vue.map(function (vue) {
  mix.js(path.join(config.plugins.vue.in, vue.in), path.join(config.plugins.vue.out, vue.out))
    .extract(['vue']);
});

mix.browserSync('anagram.dev');

if (mix.inProduction) {
  mix.version();
}

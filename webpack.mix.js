let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// Compile Sirius UI Dist
mix.js('app/src/app.js', 'dist/min/sirius.min.js')
    .sass('dist/src/sass/sirius.sass', 'dist/min/sirius.min.css');

// Compile Dev App
mix.js('app/src/app.js', 'app/min/app.min.js')
   .sass('app/src/app.sass', 'app/min/app.min.css');
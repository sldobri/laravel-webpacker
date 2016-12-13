let Elixir = require('laravel-webpacker');

Elixir.js('./resources/assets/js/app.js', './public/js/bundle.js')
      .sass('./resources/assets/sass/app.scss', './public/css/complete.css');
      .combine(['one.js', 'two.js'], 'merged.js');

module.exports = Elixir;

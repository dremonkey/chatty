Chatty
---------------------

Example frontend for a hypothetical chat application

Features
--------

#### AngularJS

[Amazing clientside framework](http://angularjs.org/) highly suited for web application development.

#### No jQuery

Trying to avoid it like the plague. Angular and [Lo-dash](http://lodash.com/) provides basically everything you need anyway

#### Bootstrap CSS

CSS framework making it easy to create good looking apps. Uses v3.0.2. Does not use the bootstrap javascript because that requires a dependency on jQuery. Instead uses [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap) for a pure Angular implementation. Bootstrap SASS files can be found in the assets/styles directory.

#### Grunt

Workhorse that takes the pain out of getting your app up and running and ready for production. Among other things I use [grunt-bower-install](https://github.com/stephenplusplus/grunt-bower-install) to make sure all my bower components are included automagically, [grunt-angular-templates](https://github.com/ericclemmons/grunt-angular-templates) to precompile all angular templates, [grunt-ngmin](https://github.com/btford/grunt-ngmin) so that I can be lazy and not have to use the min-safe AngularJS syntax, and [grunt-usemin](https://github.com/yeoman/grunt-usemin) to concat/minify etc.

#### Karma

Spectacular Test Runner for JavaScript. @TODO Not implemented... need to work on this

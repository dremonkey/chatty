'use strict';

angular.module('chatty.pages', ['ui.router.compat', 'chatty.pages.controllers', 'chatty.pages.directives'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/templates/home.tpl.html',
        controller: 'HomeCtrl'
      });
  });


angular.module('chatty.pages.controllers', []);
angular.module('chatty.pages.directives', []);
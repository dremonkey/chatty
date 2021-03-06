'use strict';

// Declare app level module
angular.module('chatty', [
  'ngAnimate',
  'chatty.common',
  'chatty.chatbox',
  'chatty.pages',
  'chatty.templates' // dynamically generated by grunt-angular-templates
]);

angular.module('chatty')

  // grunt-ngmin does not work with non-core providers so use the angular min-safe notation
  // @see https://github.com/btford/ngmin/issues/35
  .config(function ($locationProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    // enable the HTML5 push/pop history API  
    // $locationProvider.html5Mode(true);
  })

  // grunt-ngmin does not work with non-core providers so use the angular min-safe notation
  // @see https://github.com/btford/ngmin/issues/35
  .run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });

// This module will be used by grunt-angular-templates to add all templates to cache
angular.module('chatty.templates', []);
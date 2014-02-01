'use strict';

angular.module('chatty.pages.directives', [])
  .directive('home', function () {
    var directiveDefinitionObject = {

      priority: 10,

      link: function () {}
    };

    return directiveDefinitionObject;
  });
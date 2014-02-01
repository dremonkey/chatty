'use strict';

angular.module('chatty.chatbox.directives')

  // helper directive to trigger focusing on an input element using a $broadcast
  .directive('focus', function() {
    var def;
    def = {
      scope: true,
      link: function (scope, element, attr) {
        scope.$on(attr.focus, function () {
          element[0].focus();
        });
      }
    };

    return def;
  });
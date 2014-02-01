'use strict';

angular.module('chatty.chatbox.filters')

  // Not used
  .filter('linkusername', function ($sce) {
    return function (msg) {
      msg = msg.replace(/^(\w+)(?=:)/, '<a ng-click="replyto()">$1</a>');
      return $sce.trustAsHtml(msg);
    };
  });
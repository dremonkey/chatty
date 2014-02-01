'use strict';

angular.module('chatty.chatbox.directives')

  // diplay multiple chatboxes
  .directive('chattyMulti', function () {
    var def;

    def = {
      restrict: 'A',
      replace: true,
      templateUrl: 'chatbox/templates/multichat.tpl.html',
      controller: function ($scope) {
        var _count, chatboxes, newchatbox;
        
        _count = 1; // number of chatboxes to display initially
        
        // increment the counter
        newchatbox = function () {
          _count += 1;
        };

        // create an array to increment use ng-repeat over
        chatboxes = function () {
          return new Array(_count);
        };

        $scope.chatboxes = chatboxes;
        $scope.newchatbox = newchatbox;
      }
    };

    return def;
  })

  // display a single chatbox
  .directive('chattyChatbox', function () {
    var def;

    def = {
      restrict: 'A',
      replace: true,
      scope: true,
      templateUrl: 'chatbox/templates/chatbox.tpl.html',
      controller: function ($scope) {

        function replyto (username) {
          $scope.chat.text = '@' + username + ' ';
          $scope.$broadcast('startNewMessage');
        }

        // Assign scope variables
        $scope.replyto = replyto;
      },

      link: function (scope) {
        // set focus to the chat input after the username has been set
        scope.$on('usernameSet', function () {
          scope.$broadcast('startNewMessage');
        });
      }
    };

    return def;
  })

  .directive('chattySetup', function () {
    var def;

    def = {
      restrict: 'A',
      controller: function ($scope) {
        
        function setusername () {
          if ($scope.chat.username) {
            $scope.usernameSet = true;
            $scope.$emit('usernameSet');
          }
        }

        // Assign scope variables
        $scope.setusername = setusername;
      },
      link: function (scope, element) {
        // set focus to the set username input on load
        var input = element.find('input');
        input[0].focus();
      }
    };

    return def;
  });
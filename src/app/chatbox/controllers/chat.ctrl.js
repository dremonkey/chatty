'use strict';

angular.module('chatty.chatbox.controllers')
  .controller('ChatCtrl', function ($scope, $interval, chats) {

    function send (msg) {
      $scope.newmessage.$setPristine();
      $scope.chat.text = '';
      chats.send($scope.chat.username + ': ' + msg);
    }

    // Check for new messages
    $interval(function () {
      $scope.messages = chats.getMessages();
    }, 1000);

    // Assign scope variables
    $scope.chat = {};
    $scope.messages = [];
    $scope.send = send;
  });
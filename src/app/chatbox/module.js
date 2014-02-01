'use strict';

angular.module('chatty.chatbox', [
  'chatty.chatbox.controllers',
  'chatty.chatbox.directives',
  'chatty.chatbox.filters',
  'chatty.chatbox.services'
]);

angular.module('chatty.chatbox.controllers', ['chatty.chatbox.services']);
angular.module('chatty.chatbox.directives', []);
angular.module('chatty.chatbox.filters', ['ngSanitize']);
angular.module('chatty.chatbox.services', ['ngResource']);
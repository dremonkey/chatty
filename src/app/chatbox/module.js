'use strict';

angular.module('chatty.chatbox', [
  'chatty.chatbox.controllers',
  'chatty.chatbox.directives',
  'chatty.chatbox.filters',
  'chatty.chatbox.services'
]);

angular.module('chatty.chatbox')
  .run(function (Restangular) {
    
    // Restangular Requests
    Restangular.setDefaultHeaders({
      'X-Parse-Application-Id': 'voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r',
      'X-Parse-REST-API-Key': 'QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf'
    });
    
    Restangular.setBaseUrl('https://api.parse.com/1/classes/');
  });

angular.module('chatty.chatbox.controllers', ['chatty.chatbox.services']);
angular.module('chatty.chatbox.directives', []);
angular.module('chatty.chatbox.filters', ['ngSanitize']);
angular.module('chatty.chatbox.services', ['restangular', 'ngResource']);
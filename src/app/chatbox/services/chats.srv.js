'use strict';

angular.module('chatty.chatbox.services')
  
  .factory('chats', function (Restangular, $resource, $interval, _) {
    var _chats, _config, chats, base, date, lastMsgTime, messages;

    _config = {
      fetch: {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': 'voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r',
          'X-Parse-REST-API-Key': 'QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf'
        }
      },
      send: {
        method: 'POST',
        headers: {
          'X-Parse-Application-Id': 'voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r',
          'X-Parse-REST-API-Key': 'QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf'
        }
      }
    };

    // chat resource
    _chats = $resource('https://api.parse.com/1/classes/chats', {}, _config);

    // stores retrieved messages
    messages = [];

    base = Restangular.all('chats');
    chats = {};
    date = Date.now() - 1000 * 60 * 60 * 24; // get messages from the last 24 hours
    date = new Date(date);
    lastMsgTime = date.toISOString(); // time initialized
    
    chats.fetch = function () {
      var params;
      
      params = {};
      params.order = '-createdAt';
      params.where = {
        username: { $ne: 'RoboChat' },
        createdAt: {
          $gt: {
            __type: 'Date',
            iso: lastMsgTime
          }
        }
      };

      // stringify params.where
      params.where = JSON.stringify(params.where);

      // base.getList(params).then(function (response) {
      //   if (response.results[0]) {
      //     lastMsgTime = response.results[0].createdAt;
      //     messages = [].concat(response.results, messages);
      //   }
      // });

      _chats.fetch(params, function (data) {
        var _messages = [];
        if (data.results[0]) {
          lastMsgTime = data.results[0].createdAt;

          // extract the username data
          _.forEach(data.results, function (msg) {
            msg.text = msg.text.replace(/^(.[^:]+)(?=:)/, function (match, p1) {
              msg.username = p1.trim();
              return '';
            });

            _messages.push(msg);
          });

          messages = [].concat(_messages, messages);
        }
      });
    };

    chats.getMessages = function () {
      return messages;
    };

    chats.send = function (msg) {
      
      var data = {text: msg};
      _chats.send({}, data);

      // base.post(data, function (response) {
      //   console.log(response);
      // });
    };

    $interval(function () {
      chats.fetch();
    }, 3000);

    return chats;
  });
  
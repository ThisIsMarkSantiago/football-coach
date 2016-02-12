'use strict';

angular.module('footballCoachApp')
  .directive('player', function (Player) {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        var player = new Player(element[0]);
        player.setPosition(scope.$eval(attrs.x), scope.$eval(attrs.y));
        scope.$watch(function () { return scope.$eval(attrs.ngModel) }, function(newValue) {
          element.css("background-image", newValue && newValue.profilePicUrl ? "url('" + newValue.profilePicUrl + "')" : "none");
          element.html( newValue ? "<div class='player-name'>" + newValue.lastName + "</div>" : "");
        });
      }
    };
  });

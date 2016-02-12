'use strict';

angular.module('footballCoachApp')
  .filter('footballPositionSort', function () {
    return function (input) {
      return {
        "Forward": input["Forward"],
        "Midfielders": input["Midfielders"],
        "Defense": input["Defense"],
        "Goalkeepers": input["Goalkeepers"]
      };
    };
  });

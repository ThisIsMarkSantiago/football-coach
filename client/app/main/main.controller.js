'use strict';

(function() {

class MainController {

  allPlayers = []
  formations = [{
      name: "4-4-2",
      players: [
        { y: 150, x: 216 },
        { y: 150, x: 383.75 },
        { y: 365, x: 48.75 },
        { y: 365, x: 216 },
        { y: 365, x: 383.75 },
        { y: 365, x: 551.25 },
        { y: 565, x: 48.75 },
        { y: 565, x: 216 },
        { y: 565, x: 383.75 },
        { y: 565, x: 551.25 },
        { y: 670, x: 300 }
      ]
    },{
      name: "3-3-4",
      players: [
        { y: 190, x: 48.75 },
        { y: 150, x: 216 },
        { y: 150, x: 383.75 },
        { y: 190, x: 551.25 },
        { y: 365, x: 140 },
        { y: 365, x: 450 },
        { y: 365, x: 300 },
        { y: 550, x: 48.75 },
        { y: 550, x: 300 },
        { y: 550, x: 551.25 },
        { y: 670, x: 300 }
      ]
  }]
  players = {}

  constructor($http, $scope) {
    // defaults
    this.formation = this.formations[0];

    $http.get('/api/players').then(response => {
      this.allPlayers = response.data.players;
    });
  }

  isPlayerAssigned (player) {
    for(var key in this.players) {
      if(this.players[key] == player) return true;
    }
    return false;
  }
}

angular.module('footballCoachApp')
  .controller('MainController', MainController);
})();

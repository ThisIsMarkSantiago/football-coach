'use strict';

angular.module('footballCoachApp')
  .factory('Player', function (Draggable) {
    var players = [];
    return class Player extends Draggable {
      setPosition (x, y) {
        var target = this.element,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(x) || 0),
          y = (parseFloat(y) || 0);

          // translate the element
          this.element.style.webkitTransform =
          this.element.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';
          // update the posiion attributes
          this.element.setAttribute('data-x', x);
          this.element.setAttribute('data-y', y);
      }
    }
  });

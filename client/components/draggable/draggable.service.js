'use strict';

angular.module('footballCoachApp')
  .service('Draggable', function () {
    return class Draggable {
      dropzones = [];
      multiple = false;
      /*
        element:     the element to be draggable
        fixed:       makes the element sticky to its position when set to true
        restriction: the borderline of the draggable, defaults to it's parent if not set
      */
      constructor (element, fixed, restriction) {
        var draggable = this;

        draggable.interact = interact(element).draggable({
          inertia: !fixed,
          // keep the element within the area of it's parent
          restrict: {
            restriction: restriction || "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          },
          // call this function on every dragstart event
          onstart: function(event) {
            var target = event.target;
            if(draggable.dragClass) $(target).addClass(draggable.dragClass);
            if(!fixed) return;
            // keep the dragged position in the data-x/data-y attributes
            this.originalx = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            this.originaly = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
          },
          // call this function on every dragmove event
          onmove: function (event) {
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
            target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
          // call this function on every dragend event
          onend: function (event) {
            var target = event.target;
            if(draggable.dragClass) $(target).removeClass(draggable.dragClass);
            if(!fixed) return;
            // translate the element
            target.style.webkitTransform =
            target.style.transform =
              'translate(' + this.originalx + 'px, ' + this.originalx + 'px)';
            // update the position attributes
            target.setAttribute('data-x', this.originalx);
            target.setAttribute('data-y', this.originalx);
          }
        });
        //attach the draggable object to the interact object for drop function
        this.interact.draggable = this;
        this.element = element;
        return this;
      }
    };
  });

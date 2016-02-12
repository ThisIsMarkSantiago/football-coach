'use strict';

angular.module('footballCoachApp')
  .service('Dropzone', function () {
    return class Dropzone {
      classes =  {}
      value = undefined
      onDropFunction = function () {}

      constructor (element, selector) {
        var dropzone = this;
        dropzone.interact = interact(element).dropzone({
          // only accept elements matching this CSS selector
          accept: '[draggable]' + (selector || ""),
          // Require a 10% element overlap for a drop to be possible
          overlap: 0.1,

          // listen for drop related events
          ondropactivate: function (event) {
            if(!dropzone.classes || !dropzone.classes.start || dropzone.value) return;
            $(event.target).addClass(dropzone.classes.start);
          },
          ondragenter: function (event) {
            if(!dropzone.classes) return;
            if(dropzone.value) {
              $(event.target).addClass(dropzone.classes.warning);
            } else {
              if(dropzone.classes.ok) $(event.target).addClass(dropzone.classes.ok);
            }
          },
          ondrop: function (event) {
            var draggable = event.draggable.draggable;
            if(!draggable.multiple && draggable.dropzones.length > 0) {
              draggable.dropzones[0].setValue(undefined);
              draggable.dropzones = [];
            }
            draggable.dropzones.push(dropzone);
            dropzone.setValue(event.draggable.draggable);
            if(!dropzone.classes) return;
            $(event.target).removeClass(dropzone.classes.start);
            $(event.target).removeClass(dropzone.classes.ok);
            $(event.target).removeClass(dropzone.classes.warning);
          },
          ondragleave: function (event) {
            if(!dropzone.classes) return;
            $(event.target).removeClass(dropzone.classes.ok);
            $(event.target).removeClass(dropzone.classes.warning);
          },
          ondropdeactivate: function (event) {
            if(!dropzone.classes || !dropzone.classes.start || dropzone.value) return;
            $(event.target).removeClass(dropzone.classes.start);
          }
        });
        return dropzone;
      };

      setValue (draggable) {
        this.value = draggable ? draggable.dropValue : undefined;
        this.onDropFunction(this.value);

        if(this.draggable && this.draggable.dropzones.length > 0) {
          this.draggable.dropzones.splice(this.draggable.dropzones.indexOf(this), 1);
        }
        this.draggable = draggable;
      }
    };
  });

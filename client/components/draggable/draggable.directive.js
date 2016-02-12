'use strict';

angular.module('footballCoachApp')
  .directive('draggable', function (Draggable) {
    return {
      restrict: 'EA',
      scope: {
        // this will be the value of the dropzone when this element is dropped to it
        dropValue: "="
      },
      link: function (scope, element, attrs) {
        // create a Draggable instance
        var draggable = new Draggable(element[0], scope.$eval(attrs.fixed), attrs.border);
        draggable.dropValue = scope.dropValue;
        draggable.dragClass = attrs.dragClass;
        draggable.multiple = attrs.multiple;
      }
    };
  });

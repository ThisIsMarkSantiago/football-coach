'use strict';

angular.module('footballCoachApp')
  .directive('dropzone', function (Dropzone) {
    return {
      restrict: 'A',
      require: "^ngModel",
      link: function (scope, element, attrs, model) {
        var dropzone = new Dropzone(element[0], attrs.dropzone);
        dropzone.classes = scope.$eval(attrs.classes);
        dropzone.onDropFunction = function (dropped) {
          scope.$apply(function() {
            model.$setViewValue(dropped);
            model.$render();
          });
        };
      }
    };
  });

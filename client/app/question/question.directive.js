'use strict';

angular.module('theSharksApp.question')
  .directive('question', function() {
    return {
      templateUrl: 'app/question/question.html',
      restrict: 'EA',
      scope: {
        value: '='
      },
      link: function(scope, element, attrs) {
        console.log(scope.value);
      }
    };
  });

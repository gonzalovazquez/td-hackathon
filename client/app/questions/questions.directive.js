'use strict';

angular.module('theSharksApp.questions')
  .directive('questions', function () {
    return {
      templateUrl: 'app/questions/questions.html',
      restrict: 'EA',
      scope: {
        questions: '='
      }
      link: function (scope, element, attrs) {
        console.log(scope.questions);
      }
    };
  });

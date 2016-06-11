'use strict';

angular.module('theSharksApp.questions')
  .directive('question', function (questionService) {
    return {
      templateUrl: 'app/question/question.html',
      restrict: 'EA',
      scope: {
        question: '='
      },
      link: function (scope, element, attrs) {
        scope.question = questionService.getQuestions()[0];
        console.log(scope.question);
      }
    };
  });

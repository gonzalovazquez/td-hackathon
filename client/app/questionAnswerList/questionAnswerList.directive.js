'use strict';

angular.module('theSharksApp.questionAnswerList')
  .directive('questionAnswerList', function () {
    return {
      templateUrl: 'app/questionAnswerList/questionAnswerList.html',
      restrict: 'EA',
      scope: {
        questions: '='
      }
      link: function (scope, element, attrs) {

        console.log(scope.questions);

      }
    };
  });

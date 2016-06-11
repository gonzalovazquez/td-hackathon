'use strict';

angular.module('theSharksApp.questionAnswerList')
  .directive('questionAnswerList', function () {
    return {
      templateUrl: 'app/questionAnswerList/questionAnswerList.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });

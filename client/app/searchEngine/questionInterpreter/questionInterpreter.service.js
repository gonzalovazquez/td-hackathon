'use strict';

angular.module('theSharksApp.searchEngine')
  .service('questionInterpreter', function(answerMatcher) {
    this.interpret = (question) => {
      console.log(question);
      return answerMatcher.match(question.trim().split(/ +/).map(k => k.toLowerCase()));
    };
  });

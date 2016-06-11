'use strict';

angular.module('theSharksApp.searchEngine')
  .service('answerMatcher', function(questionService) {
    this.match = (keywords) => {
      var uniqueKeywords = Array.from(new Set(keywords));
      var questions = questionService.getQuestions();
      return questions.map(question => {
        return {
          matchCount: uniqueKeywords.filter(k => question.keywords.indexOf(k) >= 0).length,
          question: question
        }
      }).reduce((prev, curr) => {
        if (prev) {
          if (prev.matchCount < curr.matchCount) {
            return curr;
          }
        } else {
          return curr;
        }

        return prev;
      }).question;
    };
  });

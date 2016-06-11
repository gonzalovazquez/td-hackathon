'use strict';

var fakeData = [
  {
    "keyWords": [
      "biggest",
      "TV",
      "boardroom",
      "TD South"
    ],
    "answers": [
      {
        "answer": "18th Floor, Skype Room",
        "rating": {
          "upVote": 10,
          "downVote": 115
        }
      },
      {
        "answer": "14th Floor LinkedIn",
        "rating": {
          "upVote": 10,
          "downVote": 1
        }
      },
      {
        "answer": "18th Floor Overflow",
        "rating": {
          "upVote": 10,
          "downVote": 1
        }
      }
    ]
  },
  {
    "keywords": [
      "maternity",
      "benefits",
      "forms"
    ],
    "answers": [
      {
        "answer": "HR Link here: myhr",
        "rating": {
          "upVote": 10,
          "downVote": 1
        }
      },
      {
        "answer": "sign up for daycare when you fill out your maternity benefits forms",
        "rating": {
          "upVote": 18,
          "downVote": 1
        }
      }
    ]
  },
  {
    "keywords": [
      "Rizwan",
      "like",
      "basketball"
    ],
    "answers": [
      {
        "answer": "He does and especially loves watching the Raptors.",
        "rating": {
          "upVote": 10,
          "downVote": 1
        }
      },
      {
        "answer": "He loves all sports, basketball included.",
        "rating": {
          "upVote": 10,
          "downVote": 2
        }
      },
      {
        "answer": "I heard he likes basketball a lot but he loves writing code more. Does programming count as a sport?",
        "rating": {
          "upVote": 10,
          "downVote": 2
        }
      }
    ]
  },
  {
    "keywords": [
      "Teri",
      "Currie",
      "study",
      "university"
    ],
    "answers": [
      {
        "answer": "She studied Math at Western.",
        "rating": {
          "upVote": 10,
          "downVote": 1
        }
      },
      {
        "answer": "Teri has an MBA from the Richard Ivey School of Business, University of Western Ontario, and a B.Sc. in Mathematics from the University of Calgary..",
        "rating": {
          "upVote": 100,
          "downVote": 2
        }
      }
    ]
  },
  {
    "keywords": [
      "chequing",
      "account",
      "incentive",
      "TD"
    ],
    "answers": [
      {
        "answer": "iPad",
        "rating": {
          "upVote": 10,
          "downVote": 100
        }
      },
      {
        "answer": "Samsung 40 inch SmartTV ",
        "rating": {
          "upVote": 100,
          "downVote": 2
        }
      },
      {
        "answer": "ipad mini",
        "rating": {
          "upVote": 1,
          "downVote": 200
        }
      }
    ]
  },
  {
    "keywords": [
      "help",
      "Fort McMurray"
    ],
    "answers": [
      {
        "answer": "Call 1-844-352-1423",
        "rating": {
          "upVote": 1000,
          "downVote": 10
        }
      },
      {
        "answer": "Fort McMurray TD Helps program to make advice and assistance available to personal banking customers in need, including such options as: Payment deferrals on products like mortgages, personal loans, home equity lines of credit, small business loans, credit card payments and automotive loans The reversal of incurred fees from things like non-TD ATM fees, overdraft fees and return item fees Flexible credit options where needed",
        "rating": {
          "upVote": 100,
          "downVote": 2
        }
      },
      {
        "answer": "TD Insurance is providing on-the-ground assistance and advice",
        "rating": {
          "upVote": 100,
          "downVote": 2
        }
      }
    ]
  },
  {
    "keywords": [
      "TD MySpend",
      "rank",
      "app store"
    ],
    "answers": [
      {
        "answer": "TD MySpend app was ranked number 1 for 13 weeks in the app store for Finance category",
        "rating": {
          "upVote": 10,
          "downVote": 1
        }
      },
      {
        "answer": "The app is currently ranked 3rd for the Finance category",
        "rating": {
          "upVote": 100,
          "downVote": 2
        }
      }
    ]
  },
  {
    "keywords": [
      "mortgage",
      "calculator",
      "TD"
    ],
    "answers": [
      {
        "answer": "https://www.tdcanadatrust.com/mortgagePayCalculator.form?lang=en",
        "rating": {
          "upVote": 100,
          "downVote": 1
        }
      },
      {
        "answer": "It's on the TD Canada Trust Website",
        "rating": {
          "upVote": 10,
          "downVote": 2
        }
      }
    ]
  }
];

angular.module('theSharksApp.questionService')
  .service('questionService', function () {
    this.getQuestions = () => {
      return fakeData;
    };
  });
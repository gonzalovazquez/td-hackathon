'use strict';

var fakeData = [
  {
    "keywords": [
      "biggest",
      "tv",
      "boardroom",
      "board",
      "room",
      "td",
      "south"
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
      "rizwan",
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
      "teri",
      "currie",
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
      "td"
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
      "fort",
      "mcmurray"
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
      "td",
      "myspend",
      "my",
      "spend",
      "rank",
      "app",
      "store"
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
      "td"
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
  },
  {
    "keywords": [
      "open",
      "Direct Ivesting",
      "employee",
      "account"
    ],
    "answers": [
      {
        "answer": "You need to complete this forms located on BWeb",
        "rating": {
          "upVote": 1325,
          "downVote": 1
        }
      }
    ]
  },
  {
    "keywords": [
      "IP",
      "process"
    ],
    "answers": [
      {
        "answer": "Diagram 1, on the following page, sets out an overview of the process to protect TD’s IP and address third party IP.  http://w3.td.com/IntellectualProperyPolicy.pdf",
        "rating": {
          "upVote": 0,
          "downVote": 0
        }
      }
    ]
  },
  {
    "keywords": [
      "business club trading account",
      "process"
    ],
    "answers": [
      {
        "answer": "An account cannot be opened without full and accurate disclosure of the beneficial ownership of a corporation (individuals or non-personal entities) which is an IIROC and AML requirement \n\t 1) Business Status Report of the business must be Active \n\t 2) Anyone with signing authority (SA) and trading authority (TA) or with beneficial ownership will be required to provide information in order for the account to be opened and that all individuals to be listed as TA/SA on the account will be required to be present at the time of application \n\t 3) Photo Identification must be presented, copied and attached to the application \n\t 4) A resident of the United States may not act as Trading Authority on the account \n\n New Accounts Resource Centre - Account Documentation \n http://www.onewealth.isd.tdbank.ca/products_services/account_admin/common/new_accounts/documentation/default.asp \n\n B-Web: Discount Brokerage - Direct Trading (Non-Registered) - Policy & Procedure - Open TDW Discount Brokerage Non-Personal Account (Corporation) \n http://w3.td.com/td/myintranet/tdct/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOINDEyDTUMMfXwdDTw9Ayz8fL0MDSBAP1I_Mso83sDC2MDM2dPMxM3AzMg_xMMlwA-mIFg_Sj_Kxd_Z00U_MsglwsU5yNDEyMTC1NLU3FI_ODVPvyA7McnCUVERAC_g9nw!/ \n\n B-Web: Discount Brokerage - Direct Trading (Non-Registered) - Policy & Procedure - Open a TD Direct Investing Non-Personal Account for an Investment Club \n http://w3.td.com/td/myintranet/tdct/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOINDEyDTUMMfXwdDTw9Ayz8fL0MDSBAP1I_Mso83sDC2MDM2dPMxM3AzMg_xMMlwA-mIFg_Sj_Kxd_Z00U_MsglwsU5yNDEyMTc0sDEwFw_ODVPvyA7McnCUVERAD1A1Lw!/ \n\n B-Web: Discount Brokerage - Direct Trading (Non-Registered) - Policy & Procedure - Open TD Direct Investing Non-Personal Account for a Sole Proprietorship \n http://w3.td.com/td/myintranet/tdct/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOINDEyDTUMMfXwdDTw9Ayz8fL0MDSBAP1I_Mso83sDC2MDM2dPMxM3AzMg_xMMlwA-",
        "rating": {
          "upVote": 2500,
          "downVote": 1800
        }
      }
    ]
  },
  {
    "keywords": [
      "transit",
      "number"
    ],
    "answers": [
      {
        "answer": "The institution number for all TD Canada Trust branches is 004. \n View this sample cheque image to assist you in verifying your account details. \n\n\tLinks:\n\thttp://www.tdcanadatrust.com/lending/cheque.html\n\thttp://www.tdcanadatrust.com/locator/",
        "rating": {
          "upVote": 10500,
          "downVote": 50
        }
      },
      {
        "answer": "Identifying your account information is easy:\nIf you have a cheque: http://www.tdcanadatrust.com/lending/cheque.html\nDon't Have a Cheque?: If you do NOT have a cheque, you can locate your account information in Easyweb on the Accounts screen by selecting your account.",
        "rating": {
          "upVote": 10300,
          "downVote": 130
        }
      },
      {
        "answer": "After you log into EasyWeb:\n1)Select My Accounts then Accounts for the top menu.\n2)Scroll down until you see Looking to set up a Direct Deposit? on the left side of the page.\n3)Click on the heading to open the details window.\n4)From the drop down menu, select the account you want the deposit to go into. Then select Go.\n5)You will then see a page with your Transit (branch) number, Institution Number (for TD Canada Trust) and your Account Number that you need.\n6)You will also see information about setting up direct deposit with the federal government and your employer.",
        "rating": {
          "upVote": 10123,
          "downVote": 187
        }
      }
    ]
  }
];

var ref
angular.module('theSharksApp.questionService')
  .service('questionService', function($firebaseArray) {
    this.getQuestions = () => {
      var ref = new Firebase("https://tdChorus.firebaseio.com/questions");
      $firebaseArray(ref);
      return fakeData;
    };

    this.initData = () => {
      var ref = new Firebase("https://tdChorus.firebaseio.com/questions");
      var questions = $firebaseArray(ref);
      fakeData.forEach(q => questions.$add(q));
    };
  });

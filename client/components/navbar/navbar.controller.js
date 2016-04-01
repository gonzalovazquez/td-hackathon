'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'twitter'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
  }
}

angular.module('theSharksApp')
  .controller('NavbarController', NavbarController);

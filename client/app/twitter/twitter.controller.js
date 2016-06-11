'use strict';
(function() {
   var _questionInterpreter;
   
  class TwitterComponent {  
    constructor($state, $firebaseObject, questionInterpreter) {

      this.hashtag = '';
      this.$state = $state;
      this.$firebaseObject = $firebaseObject;
      _questionInterpreter = questionInterpreter;

      console.log($firebaseObject);
      this.data = this.$firebaseObject(new Firebase("https://iubadminton.firebaseio.com/playing_locations"));
      console.log(this.data);
      console.log(_questionInterpreter.interpret("This is my  question"));

      this.speech = SpeechToText;
      this.activeSTT;

    }

    listen() {
        this.speech.listen({
          onStart: function() {
            console.log('starting');
          },
          onResult: function(e) {
            console.log(e.text);
            _questionInterpreter.interpret(e.text);
            document.getElementById("recognizedText").innerHTML = e.text;
            if (e.isFinal) {
              if (activeSTT) {
                activeSTT.stop();
                activeSTT = null;
              }
            }
          },
          onError: function(e) {
            console.log('error', e);
          },
          onEnd: function(e) {
            console.log('end', e);
            if (activeSTT) {
              activeSTT.stop();
              activeSTT = null;
            }
          }
        });
    }

    checkHashtag() {
      if (this.hashtag) {
        var cleanedHashtag = this.hashtag.replace(/ /g, '');
        if (cleanedHashtag) {
          this.$state.go('hashtag', {hashtag: cleanedHashtag})
        }
      }
    }
  }

  angular.module('theSharksApp')
    .component('twitter', {
      templateUrl: 'app/twitter/twitter.html',
      controller: TwitterComponent
    });
})
();

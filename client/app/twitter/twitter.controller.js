'use strict';
(function() {
   var _questionInterpreter;
   var _self;
   
  class TwitterComponent {  
    constructor($state, $firebaseObject, questionInterpreter) {

      this.hashtag = '';
      this.$state = $state;
      this.$firebaseObject = $firebaseObject;
      _questionInterpreter = questionInterpreter;
      this.speech = SpeechToText;
      this.activeSTT;
      _self = this;
      
    }

    listen() {
        this.speech.listen({
          onStart: function() {
            alert('Chau');
            console.log('starting');
          },
          onResult: function(e) {
            console.log(e.text);
            _self.question = _questionInterpreter.interpret(e.text);
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
            
            console.log('FINISH!!!!', e);
            
            if (activeSTT) {
              activeSTT.stop();
              activeSTT = null;
            }
          }
        });
    }

    stop() {
      console.log('stopped');
    }


  }

  angular.module('theSharksApp')
    .component('twitter', {
      templateUrl: 'app/twitter/twitter.html',
      controller: TwitterComponent
    });
})
();

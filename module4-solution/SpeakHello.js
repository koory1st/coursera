(function (w){
  var helloSpeaker = {};
  w.helloSpeaker = helloSpeaker;
  helloSpeaker.speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(helloSpeaker.speakWord + " " + name);
  }
})(window);
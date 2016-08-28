(function (w){
  var goodByeSpeaker = {};
  w.goodByeSpeaker = goodByeSpeaker;
  goodByeSpeaker.speakWord = "Good Bye";

  goodByeSpeaker.speak = function (name) {
    console.log(goodByeSpeaker.speakWord + " " + name);
  }
})(window);


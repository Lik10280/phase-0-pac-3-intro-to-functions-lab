function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(hello){
    console.log(hello.toUpperCase());
  }
  function logWhisper(HELLO) {
    console.log(HELLO.toLowerCase());
  }
  function sayHiToHeadphonedRoommate (hello) {
    var ansOne = "I can\'t hear you!";
    var ansTwo = "YES INDEED!";
    var ansThree = "I would love to!";
    if (hello.toLowerCase(hello)=== hello) {
      return ansOne;
    }
    else if (hello.toUpperCase(hello)=== hello){
      return ansTwo;
    }
    else if ("Let's have dinner together!" ===  hello) {
      return ansThree;
    }
  }
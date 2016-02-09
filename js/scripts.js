function Cryptograph (sentence) {
  this.sentence = sentence;
}

Cryptograph.prototype.cryptographFormat = function() {
  var sent = this.sentence.toLowerCase();
  sent = sent.replace(/[, ?!.:;]/g, "");
  return sent;
}

Cryptograph.prototype.encrypt = function () {
  var sent = this.cryptographFormat(this.sentence);
  var length = sent.length;
  var firstSquareSide = Math.sqrt(length);
  if(firstSquareSide - Math.round(firstSquareSide) === 0 ) {
    var secondSquareSide = firstSquareSide;
  } else {
    var secondSquareSide = firstSquareSide + 1;
    firstSquareSide = firstSquareSide + 1;
  }
  var cryptosquare = [];
  var letterNumber = 0;
  for (var y=0; y<=secondSquareSide-1; y++) {
    cryptosquare[y] = [];
    for (var x=0; x<=firstSquareSide-1; x++) {
      cryptosquare[y][x] = sent[letterNumber];
      letterNumber++;
    }
  }
  //return cryptosquare;
  letterNumber = 0;
  var encryptSentence = "";
  for (var x=0; x<=firstSquareSide-1; x++) {
    for (var y=0; y<=secondSquareSide-1; y++) {
      if (cryptosquare[y][x] !== undefined){
        encryptSentence = encryptSentence + cryptosquare[y][x];
        letterNumber++;
        if (letterNumber === 5) {
          letterNumber = 0;
          encryptSentence = encryptSentence + " ";
        }
      }
    }
  }
  return encryptSentence;
}


$(document).ready(function() {
  $("form").submit(function (event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var newCrypto = new Cryptograph(sentence);
    $(".cryptograph").text(newCrypto.encrypt());
    $("#result").show();
  });

});

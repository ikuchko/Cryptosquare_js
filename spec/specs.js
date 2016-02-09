describe('Cryptograph', function() {
  it("cryptographFormat method converts string to lowercase and removes spaces and punctuation", function() {
    var newString = new Cryptograph("Hello, how are you?");
    expect(newString.cryptographFormat()).to.equal("hellohowareyou");
  });
  // it("encrypt method returns populated 2D array", function() {
  //   var newString = new Cryptograph("Hello");
  //   expect(newString.cryptosquare).to.eql([["h","e"], ["l","l"],["o", undefined]]);
  // });
  it("encrypt returns encrypted message", function() {
    var newString = new Cryptograph("Hello, how are you?");
    expect(newString.encrypt(newString.cryptographFormat())).to.eql("hoaoe hrulo elwy");
  });
});

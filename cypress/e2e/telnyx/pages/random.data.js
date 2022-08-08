let chars = "abcsefghijklmnopqrstuvwxyz1234567890";
let string = "";
let mathRandom = Math.random() * 15;

class getRandomData {
  randomData(mathRandom) {
    for (let i = 0; i <= 10; i++) {
      this.string += this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return string;
  }
}

module.exports = new getRandomData();

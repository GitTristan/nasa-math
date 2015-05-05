function LengthInFeet(number) {
  this.number = number;
}

function LengthInMeters(number) {
  this.number = number;
}

LengthInFeet.prototype.toFeet = function() {
  return this.number;
};

LengthInFeet.prototype.toMeters = function() {
  return this.number/3.28084;
};

LengthInMeters.prototype.toFeet = function() {
  return this.number*3.28084;
};

LengthInMeters.prototype.toMeters = function() {
  return this.number;
};

var width = new LengthInMeters(2);
var length = new LengthInFeet(13);

var area = width.toFeet() * length.toFeet();

console.log(area);

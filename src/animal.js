function Animal(name, age, kind, awake) {
  //order doesn't matter here. In animalSpec.js:
  //animal = new Animal("Fido", 27, "Pig") so it's name, age, kind
  this.name = name;
  this.kind = kind;
  this.age = age;
  this.awake = false;
}

Animal.prototype.oink = function() {
  if (this.kind === "Pig") {
    return "oink";
    }
  else {
    return "I am not a pig";
  };
};

Animal.prototype.growUp = function() {
  this.age++;
};

Animal.prototype.awake = "off";

Animal.prototype.wakeUp = function() {
  this.awake = true;
  return this.awake;
};

Animal.prototype.sleep = function() {
  this.awake = false;
  return this.awake;
};

Animal.prototype.feed = function() {
  if (this.awake === true) {
    return 'Feed me';
  }
  else if (this.awake === false) {
    return 'I asleep';
  }
};

module.exports=Animal;

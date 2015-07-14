// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation) {
  this.location = newLocation;
  return this.location;
};

Zoo.prototype.open = function () {
  this.status = 'Open!';
  return this.status;
};

Zoo.prototype.isOpen = function () {
  if (this.status === 'Open!') {
    return true;
  } else {
    return false;
  }
};

Zoo.prototype.animals = [];

Zoo.prototype.addAnimal = function (animal) {
  if (this.status === 'Open!' && animal instanceof Animal && this.animals.indexOf(animal.kind) == -1) {
    this.animals.push(animal.kind);
  }
    return this.animals;
};

Zoo.prototype.removeAnimal = function (animal) {
  if (this.status === 'Open!') {
    this.animals.splice(this.animals.indexOf(animal.kind), 1);
  }
  return this.animals;
};

module.exports=Zoo;

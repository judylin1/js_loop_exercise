var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js'),
animal,
zoo;

describe('Zoo', function(){

  beforeEach(function(){
    // create a new zoo object each time
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation('New York')).toEqual('New York');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual('Open!');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual(true);
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual(false);
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.addAnimal(pig)).toEqual([]);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      expect(zoo.addAnimal(pig)).toEqual(['pig']);
    });

    it('should only add instances of animals', function(){
      zoo.open();
      var car = {name: 'lexus', kind: 'not zoo animal, duh'};
      expect(zoo.addAnimal(car)).toEqual([]);
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      zoo.addAnimal(lion);
      expect(zoo.addAnimal(pig)).toEqual(['pig', 'lion']);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      expect(zoo.removeAnimal(lion)).toEqual(['pig']);
    });
  });
});

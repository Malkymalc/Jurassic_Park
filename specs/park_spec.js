const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('the Park', function(){

  let park;

  beforeEach(function(){
    park = new Park('Jurassic Park');
    dinosaur1 = new Dinosaur('Velociraptor',5,park);
    dinosaur2 = new Dinosaur('T-Rex', 1, park);
    dinosaur3 = new Dinosaur('Dyathinkesaurus',2, park);
    tyrannosaurus = new Dinosaur('Tyrannosaurus',3,park);
    dilophosaurus = new Dinosaur('Dilophosaurus',2,park);
  });

  it('park has a name and starts with an empty enclosure',function(){
    assert.strictEqual(park.name, 'Jurassic Park');
    assert.strictEqual(park.paddock.length, 0);
  });

  it('should be able to add a dinosaur', function(){
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.paddock.length, 1);
  });

  it('should be able to remove all dinosaurs of type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    // park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);

    // assert.strictEqual(park.paddock.length, 6);
    park.removeByType(dinosaur2.type);
    assert.strictEqual(park.paddock.length, 4);
  });

  it('should be able to get array of all dinosaurs with more than 2 kids', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    dinosaur1.reproduce();
    dinosaur2.reproduce();
    dinosaur3.reproduce();
    dinosaur3.reproduce();

    result = park.moreThanTwoKids()
    assert.strictEqual(result.length,2);
  });

// });
//======= EXTENSION TESTS =======//

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 16);
  });

  it('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(dilophosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 25);
  });

});

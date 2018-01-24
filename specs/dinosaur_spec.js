const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Dinosaurs',function(){

    var dinosaur1,dinosaur2,dinosaur3;
    var park;

    beforeEach(function(){
      park = new Park('Jurassic Park');
      dinosaur1 = new Dinosaur('Velociraptor', 5, park);
      dinosaur2 = new Dinosaur('T-Rex', 1, park);
      dinosaur3 = new Dinosaur('Dyathinkesaurus',2, park);
    });

    it('dinosaur has a type',function(){
      assert.strictEqual(dinosaur1.type,'Velociraptor');
    });

    it('has a number of offspring per year',function(){
      dinosaur1.reproduce();
      assert.strictEqual(dinosaur1.offspring, 5);
    })


});

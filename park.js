const Park = function(name){
  this.name = name;
  this.paddock = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.paddock.push(dinosaur);
}

Park.prototype.removeByType = function(type){
  const paddock = this.paddock;
  for (let i = 0; i<paddock.length; i++) {
    let dinosaur = paddock[i];
    if(dinosaur.type === type){
      paddock.splice(i, 1);
    }
  }
}

Park.prototype.moreThanTwoKids = function(){
  result = [];
  for (let i = 0; i<this.paddock.length; i++) {
    let dinosaur = this.paddock[i];
    if(dinosaur.offspring > 2){
      dinocopy = this.paddock.slice(i,i+1);
      result.push(dinocopy);
    }
  }
  return result;
}

Park.prototype.calculateDinosaurs = function(years){
  let numberOfDinos = 0;
  let paddock = this.paddock;
  for (dinosaur of paddock) {
    let kidsPerDino = Math.pow(dinosaur.fecundity+1,years);
    numberOfDinos += kidsPerDino;
  }
  return numberOfDinos;
}


module.exports = Park;

// fecundity = 5;
//
// year 0:   1           = 1           5+1^0
// year 1:   1 + 5       = 6           5+1^1 (+1)
// year 2:   1 + 5 + 30  = 36          5+1^2
// year 3:   1 + 5 + 30 + 180 = 216    5^3

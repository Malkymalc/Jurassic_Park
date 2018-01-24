const Dinosaur = function(type,fecundity,park){
  this.type = type;
  this.fecundity = fecundity;
  this.offspring = 0;
  this.park = park;
}

Dinosaur.prototype.reproduce = function(){
  park = this.park;
  kidsNumber = this.fecundity;
  for(i=1; i<=kidsNumber; i++){
    let childName = 'child' + (i + this.offspring) + '';
    childName = new Dinosaur(this.type,this.fecundity);
    park.paddock.push(childName);
  }
  this.offspring += this.fecundity;
}

module.exports = Dinosaur;

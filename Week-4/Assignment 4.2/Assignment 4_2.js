let Person = function(){};
Person.prototype.initialize=function(name,age){
  this.name=name;
  this.age= age;
}

let Teacher=function(){};
Teacher.prototype=Object.create(Person.prototype);

Teacher.prototype.teach=function(subject){
  console.log(`${this.name} is now teaching ${subject}`);
}

let him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritence");
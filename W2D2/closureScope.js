(function(){var x = 1;
var a = 5;
var b = 10;
var c = (a, b, c) => {
  console.log(x); //undefind
  console.log(a); //8
  var f = (a, b, c) => {
    b = a; //
    console.log(b); //8
    b = c; //10
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
  var x = 10;
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1

//ScopeA
function XFunc() {
  //Scope B
  function YFunc() {
    //Scope c
  }
}

var tim = 9
function myFunc(){
  return tim*tim
}
console.log(myFunc());
tim = 5
console.log(myFunc());

var fooA =1
function aFunc(){
  if(!foo){
    console.log(!foo);
    var foo=10
  }
  console.log("the alert ",foo);
}
aFunc();

const counter = {
  "count" : 0,
  add: function(){
   this.count++;
  },
  reset:function(){
    this.count = 0;
  },
  makeAdder: function(inc){
    return ()=>{
      this.count +=inc
    }
  }
}

counter.add();
counter.add();
console.log(counter.count);
counter.reset();
counter.add();
counter.add();
console.log(counter.count);
const add3 = counter.makeAdder(3)
add3()
console.log(counter.count);


console.log("==============================");

for(let name in global){
  console.log(name);
}
})();

const testObj=(function(){
  var name="",age=0,salary=0;

  //Public func
  function setAge(ag){
    this.age = ag;
  }
  function setName(nam){
    this.name = nam
  }
  function setSalary(sal){
    this.salary = sal
  }
  function increaseSalary(sal){
    this.salary += getSalary()
  }
  function increaseAge(ag){
    this.age +=getAge()
  }

  //Private
  function getAge(){
    return age
  }
  function getName(){
    return name
  }
  function getSalary(){
    return salary
  }

  //returns
  return {
    setAge,
    setName,
    setSalary,
    increaseAge,
    increaseSalary
  }

})()

testObj.setAge(27);
testObj.setSalary(270000);
testObj.setName("MyName")
testObj.increaseSalary(100)

testObj.address = ""

testObj.setAddress = function(add){
  this.address = add;
}
testObj.getAddress = function(){
  return this.address;
}

testObj.setAddress("MyAddress")

console.log(testObj);

/*it("Filter Banned words", () => {
  assert.equal(
    "This house is nice!",
    "This house is not nice!".filterBannedWrd())
});
it("Bubble sort with Map", () => {
  const pr = [-2, 0, 1, 3, 4, 6]
  const test =[6,4,0, 3,-2,1]
  assert.equal(pr.join(','), test.bubbleSort().join(','));
});


/*var x = 5;
var y = 7;
function a() {
    function b() {
        console.log(`1: x=${x} y=${y}`);//undefined 7
        y = 10;
        return function c(y) {
            console.log(`2: x=${x} y=${y}`);//10 20
        }
    }
    console.log(`3: x=${x} y=${y}`)// undefined 7
    var z = b()
    var x = 10;
    z(20);
}
console.log(`4: x=${x} y=${y}`); //x 5. y7
a();
console.log(`5: x=${x} y=${y}`);//5 10
*/
//==================================
/*var x = 5;
var y = test();
var b = { x: 4 };
var z = y.bind(b);
z();
function test() {
    console.log(this);
    console.log(x);
    var z = function() {
        var x = 3;
        console.log(this);
        console.log(this.x);
    }
    var x = 8;
    z();
    return z;
}
*/

/*var b = 5;
var c = hello(b);
var a = 1000;
var d = {a: 50, b: 90};
console.log("in window applying c to  d "+c.apply(d));
function hello(a) {
    console.log("in hello "+this);
    a = a * 2;
    console.log("in hello calling bye "+bye())
    function bye() {
        console.log("in bye "+this);
        console.log("in bye "+b);
        console.log("in bye "+this.b);
        return a;
    }
    var b = 100;
    return bye;


    /*
Window - default this for function
Window - default this for function
undefined - because b is hoisted inside hello()
5 - this is window, this.b is window.b, is the global b
10 - the a inside hello()
{a: 50, b: 90} object - this given by apply
100 - the b inside hello()
90 - the this.b of {a: 50, b: 90}
10 - the a inside hello()

}*/

//===============================
/*
W2D5 Q2:
Write a revealing module CAR that has a private variables speed, and direction and the following public methods:



gasPaddle() which increases the speed by 5, but never above 120
	break() which decreases the speed by 10, but never below 0
	turnLeft() which takes an amount of degrees and reduces direction
	turnRight() which takes an amount of degrees and increases direction
	status() which console.logs

	"The car is driving direction " + direction + " at " + speed + "mph"
*/

const CAR= (function() {
  "use strict"
  let speed = 0;
  let direction = 0 ;

  function gasPaddle(){
    if((speed +5) <=  120){
      speed += 5
    }else{
      speed = 120;
    }
  }

  function bbreak(){
    if((speed -10) >= 0){
      speed -= 10
    }else{
      speed = 0
    }
  };
	function turnLeft(dgree){
    direction -=dgree
  }
	function turnRight(dgree){
    direction +=dgree
  }
	function status(){
    console.log("The car is driving direction " + direction + " at " + speed + "mph");
  }
  return{
    gasPaddle,
    bbreak,
    turnLeft,
    turnRight,
    status
  }
})()

CAR.gasPaddle()
CAR.bbreak()
CAR.turnLeft(50)
CAR.turnRight(100)
CAR.status()


/*Implement the following class-diagram in JavaScript with
constructor functions and prototypal inheritance.

The runProgram() method should take a string that indicates which program,
and then console.log "running: " + program

The carryAround() method takes no parameters, and
console.log "carrying laptop:  cpu" + cpu +" ram: " + ram + " storage: " + storage + " battery: " + battery
*/

/*function Computer(ram,cpu,storage){
  this.ram= ram
  this.cpu = cpu
  this.storage= storage
}
Computer.prototype.runProgram = function(program){
  console.log("running: " + program);
}
function Laptop(battery,ram,cpu,storage){
  this.battery = battery
  this.ram= ram
  this.cpu = cpu
  this.storage= storage
}
Laptop.prototype.carryAround = function() {
    console.log("carrying laptop:  cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
}

Laptop.prototype.__proto__ = new Computer()

const MyLaptop = new Laptop("4mm","4GB","cpuI","1T")

MyLaptop.runProgram("testingProgram")
MyLaptop.carryAround()*/

class Computer {
  constructor(ram,cpu,storage) {
    this.ram= ram
    this.cpu = cpu
    this.storage= storage
  }
  runProgram(program){
    console.log("running: " + program);
  }
}

class Laptop extends Computer {
  constructor(battery,ram,cpu,storage) {
    super(ram,cpu,storage)
    this.battery = battery
  }
  carryAround() {
      console.log("carrying laptop:  cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
  }
}

const MyLaptop = new Laptop("4mm","4GB","cpuI","1T")
MyLaptop.runProgram("testingProgram")
MyLaptop.carryAround()
MyLaptop.stuff = "testinng"
console.log(MyLaptop.stuff);

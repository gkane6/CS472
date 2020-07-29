
/*
Instructions

For each of the following, write at least one test case for each function.  They should all be nicely formatted. See the further instructions below, if you follow those instructions you can create an html page with your JavaScript in that page and then post it to your web site.

As always your assignment report should include a comment on how long it took, and describe something that you learned from the exercise or some problem you encountered, etc.

These are the functions you should write:

Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
After you finish, make sure all your functions are in ONE JS file .

*/

const max = (num1,num2)=>{
  return num1 > num2 ? num1 : num2;
}

const maxOfThree =(num1,num2,num3)=>{
  if(num1 >= num2){
    if(num1  >= num3){
      return num1
    }return num3
  }else if(num2 >= num3){
    return num2
  }
    return num3
}

const isVowel = (str) =>{
  const vowels = ['e','u','i','o','a','y']
  return vowels.includes(str[0])
}

const sum=(arr)=>{
return arr.reduce((e,e2)=> e+e2 ,0)
}

const multiply=(arr)=>{
  return arr.reduce((e,e2)=> e*e2 ,1)
}

const reverse = (str)=>{
return str.split('').reverse().join('')
}

const findLongestWord = (arr) =>{
  let max= 0
  arr.map((e)=> {
    if(e.length > max){
      max= e.length
    }
  })
  return max
}

const filterLongWords = (arr,len) =>{
  let returnArr = []
  arr.map((e,idx)=> {
    if(e.length > len){
      returnArr.push(e)
    }
  })
  return returnArr
}

const shortest = (str1,str2,str3)=> {
  const len1 = str1.length
  const len2 = str2.length
  const len3 = str3.length
  if(len1 < len2){
    if(len1<len3){
      return str1
    }return str3
  }else if(len2<len3){
      return str2
    }return str3
}
console.log(shortest("ruu", "za", "j"))

/*==========================CALLING DOM ELEMENTS===============================================*/

const getMax = () =>{
  const num1 = parseInt(document.getElementById("maxNum1").value)
  console.log( typeof num1);
  const num2 = parseInt(document.getElementById("maxNum2").value)
  console.log(num2);
  const val = max(num1,num2)
  console.log(val);
  document.getElementById("max2R").innerHTML = val

}

const getMaxThree =(e) =>{
  const num1 = parseInt(document.getElementById("mt1").value)
  const num2 = parseInt(document.getElementById("mt2").value)
  const num3 = parseInt(document.getElementById("mt3").value)
  const valMa = maxOfThree(num1,num2,num3)
  document.getElementById("mtrR").innerHTML = valMa
  e.preventDefault()
}

const isStrVowel = () => {
  const str = document.getElementById("strV").value
  console.log(str);
  const val = isVowel(str)
  console.log(val);
  document.getElementById("vow").innerHTML = val

}

const isReverse = () =>{
  const str = document.getElementById("rvrs").value
  const val = reverse(str)
  document.getElementById("rvrsR").innerHTML = val
}

const getSum=()=>{
  const str = document.getElementById("sumAr").value
  const val = sum(str.split(',').map(el => parseInt(el)))
  document.getElementById("sumR").innerHTML = val

}

const getMulti =(e) =>{
  const str = document.getElementById("arrMult").value
  console.log(str);
  const val = multiply(str.split(',').map(el => parseInt(el)))
  console.log(val);
  document.getElementById("multiR").innerHTML = val
  e.preventDefault()
}

const getLongLen = () =>{
  const str = document.getElementById("longLenIn").value
  const val = findLongestWord(str.split(','))
  document.getElementById("longLenR").innerHTML = val

}

const getLongWrds = () =>{
  const str = document.getElementById("longLenArrs").value.split(',')
  const len = parseInt(document.getElementById("LenIn").value)
  const val = filterLongWords(str,len)
  document.getElementById("longLenArrsR").innerHTML = val

}

function f() {
var a = 1, b = 20, c;
console.log("frst in f "+a + " " + b + " " + c);//1  20 undefined
  function g() {
    var b = 300, c = 4000;
    console.log("frst in g "+a + " " + b + " " + c);//1 300 4000
    a = a + b + c;//4301
    console.log("scd in g "+a + " " + b + " " + c);//4301 300 4000
  }
  console.log("scd in f "+a + " " + b + " " + c); //1 20 undefined
  g();
  console.log("trd in f "+a + " " + b + " " + c);//4301 20 undefined
}
//f();
//
//var x = 10;
function main() {
  console.log("x1 is:" + x); //x1 is: 10
  x = 20;
  console.log("x2 is:" + x);//x2 is: 20
  if (x > 0) {
    var x = 30;
    console.log("x3 is:" + x);//x3 is: 30
  }
  console.log("x4 is:" + x);//x4 is: 20
  var x = 40;//40
  var f = function(x) {
    console.log("x5 is:" + x);//x5 is: 50
  };
  f(50);
  console.log("x6 is:" + x);//x6 is: 40
}
//main();
//console.log("x7 is:" + x);//x7 is: 20


const x = 1;
function f() {
    let y = 2;
    const sum = function() {
        const z = 3;
        console.log(x + y + z);//1+10+3
    }
    y = 10;
    return sum;
} //end of f
  const g = f();
//  g();

  var funcs = [];
  for (var i = 0; i < 5; i++) {
    console.log(`func[${i}] before funcExp ${i}`)
  funcs[i] = function() {
    console.log(`func[${i}] in funcExp ${i}`)
     return i;
  }; }
  console.log(funcs[0]());
  console.log(funcs[1]());
  console.log(funcs[2]());
  console.log(funcs[3]());
  console.log(funcs[4]());


  /* return a function with no parameters that has an ‘embedded parameter’ */
  var helper = function(n) {
    return function() {
      console.log(`func[${n}] in funcExp ${n}`)
      return n;
    }
  }
  var funcs = [];
  for (var i = 0; i < 5; i++) {
  funcs[i] = helper(i);
};
  console.log(funcs[0]());
  console.log(funcs[1]());
  console.log(funcs[2]());
  console.log(funcs[3]());
  console.log(funcs[4]());

  //ES6 solution: let vs var const funcs = [];
  for (let i = 0; i < 5; i++) {
  funcs[i] = function() { return i;
  }; }
  console.log(funcs[0]()); console.log(funcs[1]()); console.log(funcs[2]()); console.log(funcs[3]()); console.log(funcs[4]());


console.log();

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
})()

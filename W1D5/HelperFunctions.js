
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

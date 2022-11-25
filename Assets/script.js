// Assignment Code

//defining variables for password

var upperCase = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',');
var lowerCase = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',');
var specChar = "!,@,#,$,%,^,&,*,(,),_+,-,=,/,[,],{,},;,',:,?,|,<,>,+".split(',');
var number = '1,2,3,4,5,6,7,8,9,0'.split(',');

// create function to prompt user for password parameters
var length;
var randomI;
var hasNumbers = false;
var hasLowerCase = false;
var hasUpperCase = false;
var hasSpecChar = false;

// this function randomizes any array and returns a copy of the randomized array
function randomizeArray(arr) {
  var randArray = [];

  while (randArray.length < arr.length) {
      var randomI = Math.floor(Math.random() * arr.length);
      randArray.push(arr[randomI]);
    }
    return randArray;
}
  
function writePassword(pw) {
  var passwordText = document.querySelector("#password");passwordText.value = pw;
}
 

function passOptions() {
  length = parseInt(prompt('How many characters would you like your password to be?')
  ); 

   console.log(length)

 if (Number.isNaN(length)) {
      alert("Not a number");
      return false; 
     } 

  //    // length of password 8-128
    
     if (length < 8) {
       alert('Length must be more than 8');
       return false;
     }
    
     if (length > 128) {
       alert('password length must be less than 128');
      return false;
     }

  var input = prompt("Do you want Numbers?");

    if (input == "y") {
      hasNumbers = true;
     }

    input = prompt("Do you want Lower Case Letters?");

    if (input == "y") {
      hasLowerCase = true;
    }
   
    input = prompt("Do you want Upper Case Letters?");

    if (input == "y") {
      hasUpperCase = true;
    }
    input = prompt("Do you want Special Characters?");

    if (input == "y") {
      hasSpecChar = true;
    }
  
    if (
      hasLowerCase === false &&
      hasUpperCase === false &&
      hasSpecChar === false &&
      hasNumbers === false
      ) {
       alert("Must choose one char type");
       return false;
     }
     
    return true;
  }

  
  
  //object to store user inputs
  var userOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecChar: hasSpecChar,
    hasNumbers: hasNumbers
  };
  
   

function genPassword() {
  var possibleChar = []

  if (hasLowerCase == true) {
    possibleChar = possibleChar.concat(randomizeArray(lowerCase));
  }
  
  if (hasNumbers == true) {
    possibleChar = possibleChar.concat(randomizeArray(number));
  }

  if (hasUpperCase == true) {
     possibleChar = possibleChar.concat(randomizeArray(upperCase));
  }

   if (hasSpecChar == true) {
     possibleChar = possibleChar.concat(randomizeArray(specChar));
  }

  possibleChar = randomizeArray(possibleChar)

console.log(possibleChar);

  var password = "";
  for (c=0; c<length; c++) {
    var randomI = Math.floor(Math.random() * possibleChar.length);
    password = password + possibleChar[randomI];
  }
  console.log(password);

  return password;
}

while (passOptions() == false);

  console.log(length);

 var password = genPassword();

writePassword(password);


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

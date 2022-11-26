// Assignment Code

//defining variables for password

var upperCase = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',');
var lowerCase = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split(',');
var specChar = "!,@,#,$,%,^,&,*,(,),_+,-,=,/,[,],{,},;,',:,?,|,<,>,+".split(',');
var number = '1,2,3,4,5,6,7,8,9,0'.split(',');

// create function to prompt user for password parameters
var randomI;

// object to store user responses
var userOptions = {
  length: 0,
  hasUpperCase: false,
  hasLowerCase: false,
  hasSpecChar: false,
  hasNumbers: false,
}

// this function randomizes any array and returns a copy of the randomized array
function randomizeArray(arr) {
  var randArray = [];

  while (randArray.length < arr.length) {
      var randomI = Math.floor(Math.random() * arr.length);
      randArray.push(arr[randomI]);
    }
    return randArray;
}
// this function creates password from pool of possible characters
function createPassword() {
  while (passOptions() == false);
  console.log(length);

 var password = genPassword();

 while (verifyPassword(password) == false) {
  console.log("invalid-retrying")
  password = genPassword();
 }
  writePassword(password);
}

// this function writes password to screen
function writePassword(pw) {
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;
}
 
// this functions takes user inputs to create pool of possible characters for password
function passOptions() {

  userOptions.length = 0,
  userOptions.hasUpperCase = false,
  userOptions.hasLowerCase = false,
  userOptions.hasSpecChar = false,
  userOptions.hasNumbers = false,

  userOptions.length = parseInt(prompt('How many characters would you like your password to be? (8-128)')
  ); 
 console.log(userOptions.length)

 if (Number.isNaN(userOptions.length)) {
      alert("Please choose a number between 8 and 128");
      return false; 
     } 

  // length of password 8-128
    
     if (userOptions.length < 8) {
       alert("Password must be at least 8 characters");
       return false;
     }
    
     if (userOptions.length > 128) {
       alert('Password must be less than 128 characters');
      return false;
     }

  var input = prompt("Would you like to include Upper Case Letters? If so type y");

  if (input == "y") {
      userOptions.hasUpperCase = true;
     }
 
    input = prompt("Would you like to include Lower Case Letters? If so type y");

    if (input == "y") {
      userOptions.hasLowerCase = true;
      }
   
     
    input = prompt("Would you like to include Special Characters? If so type y");

    if (input == "y") {
      userOptions.hasSpecChar = true;
       }

    input = prompt("Would you like to include Numbers? If so type y");

    if (input == "y") {
      userOptions.hasNumbers = true;
    }

    
    
    // check for validity of user responses
    if (
      userOptions.hasUpperCase == false &&
      userOptions.hasLowerCase == false &&
      userOptions.hasSpecChar == false &&
      userOptions.hasNumbers == false
      ) {
       alert("You must select at least one character type");
       return false;
     }
     
    return true;
  }
  
// this function randomizes the user selected character types to generate password

function genPassword() {
  var possibleChar = []

  if (userOptions.hasUpperCase == true) {
    possibleChar = possibleChar.concat(randomizeArray(upperCase));
 }
  
 if (userOptions.hasLowerCase == true) {
    possibleChar = possibleChar.concat(randomizeArray(lowerCase));
  }
  
   if (userOptions.hasSpecChar == true) {
     possibleChar = possibleChar.concat(randomizeArray(specChar));
  }
  
  if (userOptions.hasNumbers == true) {
    possibleChar = possibleChar.concat(randomizeArray(number));
  }

  possibleChar = randomizeArray(possibleChar)

console.log(possibleChar);

  var password = "";
  for (c=0; c<userOptions.length; c++) {
    var randomI = Math.floor(Math.random() * possibleChar.length);
    password = password + possibleChar[randomI];
  }
  console.log(password);

  return password;
}

function notContainsUpperCase(pa) {
  for (n=0; n<pa.length; n++) {
   if (upperCase.includes(pa[n]))
    return false;
  }
  return true;
}

function notContainsLowerCase(pa) {
  for (n=0; n<pa.length; n++) {
    if (lowerCase.includes(pa[n]))
    return false;
  }
  return true;
}

function notContainsSpecChar(pa) {
  for (n=0; n<pa.length; n++) {
    if (specChar.includes(pa[n]))
    return false;
  }
  return true;
}

function notContainsNumbers(pa) {
  for (n=0; n<pa.length; n++) {
    if (number.includes(pa[n]))
    return false;
  }
  return true;
}

function verifyPassword(pw) {
  passwordArray = pw.split("");

  if (userOptions.hasUpperCase && notContainsUpperCase(passwordArray)) {
    return false;
  }

  if (userOptions.hasLowerCase && notContainsLowerCase(passwordArray)) {
    return false;
  }

  if (userOptions.hasSpecChar && notContainsSpecChar(passwordArray)) {
    return false;
  }

  if (userOptions.hasNumbers && notContainsNumbers(passwordArray)) {
    return false;
  }

  return true;

}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

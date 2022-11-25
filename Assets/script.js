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
  
  

function passOptions() {
  length = parseInt(prompt('How many characters would you like your password to be?')
  ); 

   console.log(length)

//  if (Number.isNaN(length)) {
//       alert(" is not a number");
//       return false; 
//     } 

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
      hasUpperCase = true;
    }
   
    input = prompt("Do you want Upper Case Letters?");

    if (input == "y") {
      hasUpperCase = true;
    }
    input = prompt("Do you want Special Characters?");

    if (input == "y") {
      hasSpecChar = true;
    }
  
    return true;
  }
  // var hasLowerCase = confirm("Would you like to include lower case letters.");
  // var hasUpperCase = confirm("Would you like to include lower case letters.");
  // var hasSpecChar = confirm("Would you like to include lower case letters.");
  // var hasNumbers = confirm("Would you like to include lower case letters.");
  // //  password needs lower, upper, number, special
  // //create conditional to make sure at least one character type is selected
  
  // if (
  //  hasLowerCase === false &&
  //  hasUpperCase === false &&
  //  hasSpecChar === false &&
  //  hasNumbers === false
  //  ) {
  //   alert("Must choose one char type");
  // //  return null;
  
  // //object to store user inputs
  // var userOptions = {
  //   length: length,
  //   hasLowerCase: hasLowerCase,
  //   hasUpperCase: hasUpperCase,
  //   hasSpecChar: hasSpecChar,
  //   hasNumbers: hasNumbers
  // };
  
  // console.log(userOptions)
  // return userOptions
  

function genPassword() {
  var possibleChar = []

  if (hasLowerCase = true) {
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
}

while (passOptions() == false);

  console.log(length);
  genPassword()




//  

// 
// //function for randomizing elements from an array

// 

// //write function to generate password


// function genPassword() {

// //create variable to store the user object from our user input function

// var userOptions = passOptions();

// //variable to store passwork as its being created - we will be Pushing the results as they are happening in here

// var result = [];

// //create an array to store the trypes of characters to include in the pw

// var possibleChar = [];

// //create an array to store guaranteed characters

// var guaranteedChar = [];

// //check if options exists if not exit function
// if (!userOptions) return null;

// //conditional statemens that add array of lowercase characters into array of possible charaters based on user's input (4 if statements)

// if (userOptions.hasLowerCase) {
//   possibleChar = possibleChar.concat(lowerCase)
//   guaranteedChar.push(randomizeArray(lowerCase))
// }

// //create a for loop to iterate over the password length from the options object, seleting random I from the array of possible characters concating and return them into the resuls variable.

// //create for loop for mix in at least one of each gruanteed characters into the result to mix in a guaranteed sharacter to the result

// //return the result and make it into a string and pass it into writePassword
// return result.join('');

// }

// //write someFunction to make function that randomizes my characters

// passOptions();






// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

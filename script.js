// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//will fire when our use clicks the button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = window.prompt('Choose a password length between 8 and 128 characters', '');

 //Checks for only numbers
    numOnly = /\d+/
    passwordLength = passwordLength.match(numOnly);

  //Checks for valid length
   if (passwordLength < 8 || passwordLength > 128) { 
    window.alert('Choose vaid input. Try Again')
    return null;
   } 

   //Checks for only numbers
  if (passwordLength == /\d+/) {
    window.alert('Choose vaid input. Try Again')
    return null
  }

 //variables to keep track of what the user wants in their password
  var upperCase;
  var lowerCase;
  var numbers;
  var special;

  totalTrue = 0

//asks if the user wants uppercase letters, then set the value of uppercase to either true or false
  var upperCaseQ = confirm('Do you want to include UPPERCASE letters?  OK for yes/ CANCEL for no')
   if(upperCaseQ) {
    upperCase = true;
    totalTrue++
   } else {
    upperCase= false;
   }

//asks if the user wants lowercase letters, then set the value of lowercase to either true or false
  var lowerCaseQ = confirm('Do you want to include LOWERCASE letters? OK for yes/ CANCEL for no')
  if(lowerCaseQ) {
    lowerCase = true;
    totalTrue++
   } else {
    lowerCase= false;
   }

//asks if the user wants numbers, then set the value of numbers to either true or false
  var numbersQ= confirm('Do you want to include NUMBERS letters? OK for yes/ CANCEL for no')
  if(numbersQ) {
    numbers = true;
    totalTrue++
   } else {
    numbers = false;
   }

//asks if the user wants SPECIAL CHARACTERS letters, then set the value of SPECIAL CHARACTERS to either true or false
  var specialQ = confirm('Do you want to include SPECIAL CHARACTERS letters? OK for yes/ CANCEL for no')
  if(specialQ) {
    special = true;
    totalTrue++
   } else {
    special= false;
   }
  // all the options that the generater can choose from. Each array is dounbled so there are at least 128 options
  var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
  var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
  var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialArr = ['!', '@', '#', '$', '%', '^', '&','!', '@', '#', '$', '%', '^', '&']
  // empty arr to hold the newly generated arrays
var passwordArr = [];
  // keeps track of roughly how many of each option to go in the passwordArr 
  var numberofEachArr = (passwordLength/totalTrue)*2
//  function to pick radom elements of a certain number from an array
   function randomArrElements(arr, num) {
     var mix = arr.sort( () =>
      0.5 - Math.random());
      return mix.slice(0, num)
   }
// if statements that add a certain number of each option to the password array if of was selected 
  if (upperCase) {
     let newUppercaseArr = randomArrElements(uppercaseArr, numberofEachArr)
     passwordArr = passwordArr.concat(newUppercaseArr)
  }

  if (lowerCase) {
      let newLowercaseArr = randomArrElements(lowerCaseArr, numberofEachArr)
      passwordArr = passwordArr.concat(newLowercaseArr)
   }

  if (numbers) {
    let newNumbersArr = randomArrElements(numbersArr, numberofEachArr)

    passwordArr = passwordArr.concat(newNumbersArr)
 }

 
  if (special) {
    let newSpecialArr = randomArrElements(specialArr, numberofEachArr)

    passwordArr = passwordArr.concat(newSpecialArr)
}
// randomly picks from the arrays created in the if statements to geneterate a password that is the length the user chose
   var passwordRandom = randomArrElements(passwordArr, passwordLength)
   console.log(passwordLength)
   console.log(passwordRandom)

   return passwordString = passwordRandom.join('')
   
}
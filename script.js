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
  // must return a STRING value that is the password.
  // confirm statements: 
    //propmt users to chose num between 8 and 128
       //validate user num
       //var to save length
    // confirm prompt yes(true) no(false) for:
        // upper lower num special characters
        //four confirm promts total 
        //for vars to save T/F
    // Validate that at least one cat was chosen
    //Vars that inclue all user options of each category. Array of string for each cat.
    // var upper = ['a', 'b']
    //if user says yes to include that cat choose random(Math.random) elemets to choose from each array
    //Join chosen elements into a string
    //return passwordString
//need a forloop somewhere 
//lots of if statement//
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

//asks if the user wants uppercase letters, then set the value of uppercase to either true or false
  var upperCaseQ = confirm('Do you want to include UPPERCASE letters?  OK for yes/ CANCEL for no')
   if(upperCaseQ) {
    upperCase = true;
   } else {
    upperCase= false;
   }

//asks if the user wants lowercase letters, then set the value of lowercase to either true or false
  var lowerCaseQ = confirm('Do you want to include LOWERCASE letters? OK for yes/ CANCEL for no')
  if(lowerCaseQ) {
    lowerCase = true;
   } else {
    lowerCase= false;
   }

//asks if the user wants numbers, then set the value of numbers to either true or false
  var numbersQ= confirm('Do you want to include NUMBERS letters? OK for yes/ CANCEL for no')
  if(numbersQ) {
    numbers = true;
   } else {
    numbers = false;
   }

//asks if the user wants SPECIAL CHARACTERS letters, then set the value of SPECIAL CHARACTERS to either true or false
  var specialQ = confirm('Do you want to include SPECIAL CHARACTERS letters? OK for yes/ CANCEL for no')
  if(specialQ) {
    special = true;
   } else {
    special= false;
   }
  
   //keeping track to see if code is working properly
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numbers);
  console.log(special);

}
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
}
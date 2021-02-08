// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //i need to make generatePassword function prompt the criteria
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//pulled function generatePassword
// created variables and with correlating prompts
function generatePassword() {
 var passwordLength = prompt("Choose password between 8 -  128 characters."); 
 //used "if" statement to ensure password meets length criteria
 if( passwordLength  <8 || passwordLength >128) {
     alert("Password must be within 8 and 128 characters.");
     location.reload();
 } else {
 var passwordLowercase = prompt("Does the password require lowercase characters? yes or no.");
 var passwordUppercase = prompt("Does the password require uppercase characters? yes or no.");
 var passwordNumeric = prompt("Does the password require numeric characters? yes or no.");
 var passwordSpecial = prompt("Does the password require special characters? yes or no.");

 //these are the options for the criteria
 var lowercase = "abcdefghijklmnopqrstuvwxyz"
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var numeric = "0123456789"
 var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
 var fullstringPassword = ""
 }
 //create if statments for the prompts 
 // calls strings from criteria variables if "yes"
 if (passwordLowercase === "yes") {
   fullstringPassword += lowercase
 }
 if (passwordUppercase === "yes") {
   fullstringPassword += uppercase
 }
 if (passwordNumeric === "yes"){
   fullstringPassword += numeric
 }
 if (passwordSpecial === "yes"){
   fullstringPassword += special
 }
 if (fullstringPassword === ""){
   alert("Please provide at least one criteria");
   location.reload();
 }

 //I need to generate a password with the fullstring accepting all criteria\
 // use math to randomize the password
 var generatedSecurePass = ""
 var i;
 for (var i = 0; i < passwordLength; i++) {
  generatedSecurePass += fullstringPassword.charAt(Math.floor(Math.random() * fullstringPassword.length));
 } 
 return generatedSecurePass

}

//create if statements to 

//create prompts to choose length between 8 - 128 characters
// prompt to determine character types such as lowercase, uppercase, numeric, and/or special characters
// 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
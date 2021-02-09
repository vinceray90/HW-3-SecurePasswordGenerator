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
  //using PROMPT so the user is prompted to write the number of characters needed
 var passwordLength = prompt("Choose password between 8 -  128 characters."); 
 //used "if" statement to ensure password meets length criteria
 if( passwordLength  <8 || passwordLength >128) {
     alert("Password must be within 8 and 128 characters.");
     location.reload();
     //using ELSE statement after confirming the user meets the length criteria
     //using CONFIRM statement to determine if the following criteria is required for the password
 } else {
 var passwordLowercase = confirm("Does the password require lowercase characters?");
 var passwordUppercase = confirm("Does the password require uppercase characters?");
 var passwordNumeric = confirm("Does the password require numeric characters?");
 var passwordSpecial = confirm("Does the password require special characters?");

 //variables associated with STRINGS of characters that meet said criteria
 var lowercase = "abcdefghijklmnopqrstuvwxyz"
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 var numeric = "0123456789"
 var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
 var fullstringPassword = ""
 }

 //create IF statments to add criteria if TRUE to the fullstringPassword
 // calls strings from criteria variables 
 if (passwordLowercase) {
   fullstringPassword += lowercase
 }
 if (passwordUppercase) {
   fullstringPassword += uppercase
 }
 if (passwordNumeric){
   fullstringPassword += numeric
 }
 if (passwordSpecial){
   fullstringPassword += special
 }
 //ALERT in the event that the user provides no criteria
 if (fullstringPassword == ""){
   alert("Please provide at least one criteria");
   location.reload();
 }

 // DO statement to test the passord until it meets the criteria once 
 do {
  var generatedSecurePass = ""

  for (var i = 0; i < passwordLength; i++) {
   generatedSecurePass += fullstringPassword.charAt(Math.floor(Math.random() * fullstringPassword.length));
  }

 console.log(generatedSecurePass)

  var hasLower = false;
  var hasUpper = false;
  var hasNumeric = false;
  var hasSpecial = false;
  
  //using the FOR loop and IF/ELSE IF statements to ensure that at least one of each requested criteria is met in the password
  for (var i = 0; i < generatedSecurePass.length; i++) {
   var char = generatedSecurePass[i];
 
   if (lowercase.includes(char)) {
     hasLower = true;
   } else if (uppercase.includes(char)) {
     hasUpper = true;
   } else if (numeric.includes(char)) {
     hasNumeric = true;
   } else if (special.includes(char)) {
     hasSpecial = true;
   } 
 
  }
}
//WHILE loop to determine if it NEEDS the criteria and if it HAS the criteria
   while (
    (passwordLowercase && !hasLower) ||
    (passwordUppercase && !hasUpper) ||
    (passwordNumeric && !hasNumeric) ||
    (passwordSpecial && !hasSpecial)
  ) 

  return generatedSecurePass
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
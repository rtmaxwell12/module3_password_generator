// Assignment code here
var characterlength =8;
var choiceArr = [];

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPromps = getPrompts(); 
    
    if(correctPromps) {
      var newPassword = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = newPassword;

}

function generatePassword() {

  var password = "";
  for(var i = 0; i < characterlength; i++) {
      var index = Math.floor(math.Random() * choiceArr.length)
      password = password + choiceArr[index];
  }
  return password;
}

function getPrompts() {
    choiceArr = [];
  
    characterLength = parseInt(prompt("How many characters do you want your password to be? It must be between 8 and 128 characters."));

    if(isNaN(characterLength) || characterlength < 8 || characterlength > 128)
    alert("Character length must be a whole number between 8 and 128");
    return false;
}
    if (confirm("Would you like to include lower case letters?")); {
        choiceArr = choiceArr.concat(lowercaseChar);
    }
    if (confirm("Would you like to include upper case letters?")); {
        choiceArr = choiceArr.concat(uppercaseChar);
    }
    if (confirm("Would you like to include special characters?")); {
    choiceArr = choiceArr.concat(specialChar);
    }
    if (confirm("Would you like to include numbers?")); {
        choiceArr = choiceArr.concat(numberChar);
    }
  }
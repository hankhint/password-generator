//variables for user input on password parameters
const includeUppercaseElement = document.getElementById("upperChars");
const includeLowercaseElement = document.getElementById("lowerChars");
const includeSymbolsElement = document.getElementById("symbolChars");
const includeNumbersElement = document.getElementById("numberChars");

//variable for displaying password
const passwordDisplay = document.getElementById("password");

//variables and listeners for number input and slider
const passLengthBoxEl = document.getElementById("passLengthBox");
const passLengthSliderEl = document.getElementById("passLengthSlider");

//event listeners to keep password length slider and input box synchronized with the same value
passLengthBoxEl.addEventListener("input", syncCharacterAmount);
passLengthSliderEl.addEventListener("input", syncCharacterAmount);

//keeps the slider and the input box synced with the same number
function syncCharacterAmount(e) {
  const value = e.target.value;
  passLengthSliderEl.value = value;
  passLengthBoxEl.value = value;
}

//variables holding all possible password characters in one array
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

//generate button variable and event listener
var generateBtn = document.querySelector("#generateBtn");
generateBtn.addEventListener("click", passwordToBox);

function passwordToBox() {
  // console.log("clickworked");
  const characterAmount = passLengthBoxEl.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeLowercase = includeLowercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(
    characterAmount,
    
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
}

function generatePassword(
  characterAmount,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  //password parameter validation  USER MUST INPUT AT LEAST ONE PARAMETER
  if (
    includeLowercase == false &&
    includeUppercase == false &&
    includeNumbers == false &&
    includeSymbols == false
  ) {
    
    //if no parameters are selected, do not generate a password and alert user
    alert("Please select at least one type of character to be included");
    return;
  }

  
  //initializing charCodes, an array of all possible password characters
  let charCodes = [];

  //initializing variable for holding the password as it is concantenated
  const passwordCharacters = [];

  if (includeUppercase) {
    //inserting at least one uppercase letter
passwordCharacters.push("A");
   charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  }
  //lowercase will be pushed twice
  if (includeLowercase) {
    //inserting at least one lowercase letter
    passwordCharacters.push("a");
    charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
  }
  if (includeNumbers) {
//inserting at least one number
  charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  passwordCharacters.push("1");
  }
  if (includeSymbols) {
    //inserting at least one character
    passwordCharacters.push("'");
  charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  }
  
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// Assignment Code

// Write password to the #password output
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//stops button from refreshing page
//FormData.addEventListener('submit', e => {
//    e.preventDefault();
//})

//get user input for password parameters
// which characters?
// how many characters? var = chacterAmount

//create an array of all potential password characters var = passwordChar
// use if statements and concat it together

// use a for loop with max value of characterAmount
// generate a random number between 0 and passwordChar.length
// use the random number to pull one random character from passwordChar array
// append the random character from passwordChar to var = password

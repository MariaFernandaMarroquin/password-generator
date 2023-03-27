
var generateBtn = document.querySelector("#generate");

var mixVariables = ""

lowerArr = "abcdefghijklmnopqrstuwxyz"
upperArr = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
numberArr = "0123456789"
symbolArr = "¡!¿?.-,*/()<>^*"


function lenght() { 
  passwordLenght = Number(window.prompt("Please specify the lenght of the password (min 8 - max 128)"));
  if (passwordLenght < 8 || passwordLenght > 128) {
  alert("Please enter a valid lenght"); lenght()
}
  
}

function criteria() {
  criteriaLowercase = confirm("Does the password require lowercases?");
  criteriaUppercase = confirm("Does the password requires uppercases?");
  criteriaNumbers = confirm("Does the password requires numbers?");
  criteriaSymbols = confirm("Does the password requires special symbols?")
}

function validate () {
  if (criteriaLowercase === true) {
    mixVariables += lowerArr
  } else { mixVariables = mixVariables }

  if (criteriaUppercase === true) {
    mixVariables += upperArr
  } else { mixVariables = mixVariables }

  if (criteriaNumbers === true) {
    mixVariables += numberArr
  } else { mixVariables = mixVariables }

  if (criteriaSymbols === true){
    mixVariables += symbolArr
  } else { mixVariables = mixVariables }
}


function generatePassword() {
  lenght();
  criteria();
  validate();

  var password = ""  
  for (var i=0; i<passwordLenght; i++) {
    index = Math.floor(Math.random()* mixVariables.length)
    password += mixVariables[index]
  }
  mixVariables = ""
  return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);

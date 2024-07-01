function passwordValidation(pass) {
  let isValidLength = checkLength(pass);
  let hasOnlyLetterDigits = checkOnlyLettersDigits(pass);
  let hasMin2Dig = checkDigitsCount(pass);

  /*  if (isValidLength === true && hasOnlyLetterDigits === true && hasMin2Dig === true){ */
  if (isValidLength && hasOnlyLetterDigits && hasMin2Dig) {
    console.log(`Password is valid`);
  }
  function checkLength(password) {
    and;
    if (password.length < 6 || password.length > 10) {
      console.log(`Password must be between 6 and 10 characters`);
      return false;
    } //Може и да няма else,тъй като return прекратява функцията
    return true;
  }
  function checkOnlyLettersDigits(password) {
    let pattern = /^[A-Z a-z 0-9]+/;
    // let pattern =/^[A-Za-z0-9] без плюс за едно съвпадение /
    let isValid = pattern.test(password);

    if (isValid === true) {
      return true;
    } else {
      ///можем и без else
      console.log(`Password must contain only letters and digits`);
      return false;
    }
  }
  function checkDigitsCount(password) {
    let patter = /[0-9]{2,}/;
    let isValid = patter.test(password);
    if (isValid === true) {
      return true;
    } else {
      ///можем и без else
      console.log(`Password must have at least 2 digits`);
      return false;
    }
  }
}

passwordValidation("logIn");
passwordValidation("MyPass123");
passwordValidation("Pa$s$s");



/* function passwordValidator(password) {
    const passwordLenght = (password) => {
      return password.length >= 6 && password.length <= 10 ? true : false;
    };
    const letterAndDigits = (password) => {
      const regex = /^[A-Za-z0-9]+$/;
      return regex.test(password);
    };
    const containsDigits = (password) => {
      let numOfNumbers = 0;
      for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
          numOfNumbers++;
        }
      }
      return numOfNumbers >= 2 ? true : false;
    };
   
    if (!passwordLenght(password)) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!letterAndDigits(password)) {
      console.log("Password must consist only of letters and digits");
    }
    if (!containsDigits(password)) {
      console.log("Password must have at least 2 digits");
    }
    if (
      passwordLenght(password) &&
      letterAndDigits(password) &&
      containsDigits(password)
    ) {
      console.log("Password is valid");
    }
  } 
  passwordValidator("logIn")*/
const passwordValidation = (password) => {
    const errors = {};
  
    // Check if password is not empty
    if (!password) {
      errors.password = "Password is required.";
    } else {
      // Check password criteria
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordPattern.test(password)) {
        errors.password = "Password must be at least 8 characters long, include both uppercase and lowercase letters, a number, and a special character.";
      }
    }
  
    return errors;
  };
  
  export default passwordValidation;
  
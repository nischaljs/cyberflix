export const validateLoginForm = (email, password) => {
    const errors = {};

    // Check if email/mobile number is not empty
    if (!email) {
      errors.email = "Email or mobile number is required.";
    } else {
      // Check if email is in a valid format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

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

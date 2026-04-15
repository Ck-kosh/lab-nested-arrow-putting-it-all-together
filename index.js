// Outer function: creates a login tracker
function createLoginTracker(userInfo) {
  // Track number of attempts (private via closure)
  let attemptCount = 0;

  // Inner arrow function: handles login attempts
  return (passwordAttempt) => {
    // If already locked, stop immediately
    if (attemptCount >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    // Increment attempt count
    attemptCount++;

    // Check password
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      // If this was the last allowed attempt
      if (attemptCount >= 3) {
        return "Account locked due to too many failed login attempts";
      }
      return `Login failed (Attempt ${attemptCount})`;
    }
  };
}

// Example usage:
const user = {
  username: "user1",
  password: "password123"
};

const login = createLoginTracker(user);

console.log(login("wrong"));       // Login failed (Attempt 1)
console.log(login("wrong"));       // Login failed (Attempt 2)
console.log(login("wrong"));       // Account locked...
console.log(login("password123")); // Account still locked
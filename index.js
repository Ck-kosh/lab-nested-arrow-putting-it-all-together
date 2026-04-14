function createLoginTracker (userInfo){
  const user = {
    username: "user",
    password: "pass1234"
  }
  let attemptCount = 0
  return (passwordAttempt) => {
    attemptCount++;
    if(passwordAttempt === user.password){
      if (attemptCount <= 3){
        console.log("Login successful")
      }
      else{
        console.log("Account locked due to too many failed login attempts")
      }
    }
    else{
      if(attemptCount <= 3){
        console.log(`Attempt ${attemptCount}: Login failed`)
      }
      else{
        console.log("Account locked due to too many failed login attempts")
      }
    }
  }
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
}
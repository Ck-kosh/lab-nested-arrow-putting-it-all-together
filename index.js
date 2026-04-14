
function createLoginTracker (userInfo, username, password){
  let attemptCount = 0
  return (passwordAttempt) =>(
    attemptCount++;
    if(passwordAttempt === userInfo.password){
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
  )
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
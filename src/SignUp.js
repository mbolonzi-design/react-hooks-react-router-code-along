import React from "react";

function SignUp(){
    return(
      <div>
      <h1>Sign Up</h1>
      <form>
      <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" name="Password" placeholder="Confirm Password" />
          </div>
          <input type="submit" value="Sign Up" />
      </form>
    </div>
    )
  }

  export default SignUp;
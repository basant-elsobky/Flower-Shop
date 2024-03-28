import './page.css'

function page() {
  return (
    <div className='reset'>
   <div class="mainDiv">
  <div class="cardStyle">
    <form action="" method="post" name="signupForm" id="signupForm">
      
      
      
      <h2 class="formTitle">
        Login to your account
      </h2>
      
    <div class="inputDiv">
      <label class="inputLabel" for="password">New Password</label>
      <input type="password" id="password" name="password" required/>
    </div>
      
    <div class="inputDiv">
      <label class="inputLabel" for="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword"/>
    </div>
    
    <div class="buttonWrapper">
      <button type="submit" id="submitButton"  class="submitButton pure-button pure-button-primary">
        <span>Continue</span>
       
      </button>
    </div>
      
  </form>
  </div>
</div>
    </div>
  )
}

export default page

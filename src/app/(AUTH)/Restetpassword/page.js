import './page.css'

function page() {
  return (
    <div className='reset'>
   <div className="mainDiv">
  <div className="cardStyle">
    <form action="" method="post" name="signupForm" id="signupForm">
      
      
      
      <h2 className="formTitle">
        Login to your account
      </h2>
      
    <div className="inputDiv">
      <label className="inputLabel" for="password">New Password</label>
      <input type="password" id="password" name="password" required/>
    </div>
      
    <div className="inputDiv">
      <label className="inputLabel" for="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword"/>
    </div>
    
    <div className="buttonWrapper">
      <button type="submit" id="submitButton"  className="submitButton pure-button pure-button-primary">
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

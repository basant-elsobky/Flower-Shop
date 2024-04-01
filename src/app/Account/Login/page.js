'use client'
import './login.css'

import First from '../../[Detailsid]/first/First';
import Link from 'next/link';
import supabase from '../../Config/Supabaseclient';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { userContext } from '../../context/userContext';

function page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(userContext)

 
  const router = useRouter()

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    sessionStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    
  }
 
 
  
   


  const handleSignIn = async (e) => {
    e.preventDefault();
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {

    } if (data) {

    }

    console.log("Successfully logged in");
    await getUser()

    router.push("/")

  };
  return (
    <>
      <div >
        <First name="Login" />
        <div className="main container">
          <div className="signup">
            <form onSubmit={handleSignIn}>

              <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" placeholder="Email" required />
              <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" name="pswd" placeholder="Password" required />

              <h5>Forgot your password?</h5>
              <button type="submit">Sign in</button>
              <Link href='/Account/Signup'>

                <h6>Create Account</h6>
              </Link>
              <Link href='/'>

                <h6>Return to store</h6>
              </Link>
            </form>
          </div>


        </div>
      </div>
    </>
  )
}

export default page

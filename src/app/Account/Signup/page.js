'use client'
import { useContext, useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import './page.css';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import supabaseUrl from '../../Config/Supabaseclient';
import supabaseKey from '../../Config/Supabaseclient';

import First from '../../[Detailsid]/first/First';
import Link from 'next/link';
import { userContext } from '@/app/context/userContext';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setcheck] = useState(' ');
    const {setUser} = useContext(userContext);

    const router = useRouter();

    const supabase = createClientComponentClient(supabaseUrl, supabaseKey)

    const handleSignup = async (e) => {
        e.preventDefault();
        let { data: { user }, error } = await supabase.auth.signUp({
            email,
            password,
        });
      
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user))
        setEmail('');
        setPassword('');
        // router.push("/");
        setcheck(<>


            <div class="alert alert-success" role="alert">
                {error ? error.message : "Here is a gentle confirmation that your account was successful created."}

            </div>


        </>)


    };

    return (
        <div >
            <First name="CREATE ACCOUNT" />
            <div className="main container">
                <div className="signup">
                    <form onSubmit={handleSignup}>

                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="Email" required />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="pswd" placeholder="Password" required />
                        <button type="submit">CREATE</button>
                        {check}
                    </form>
                    <Link href='/Account/Login'>
                        <h6>Have account login</h6>
                    </Link>
                    <Link href='/'>

                        <h6>Return to store</h6>
                    </Link>
                </div>


            </div>
        </div>
    );
}

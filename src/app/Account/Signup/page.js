'use client'
import { useEffect, useState } from 'react';
import './page.css';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import supabaseUrl from '../../Config/Supabaseclient';
import supabaseKey from '../../Config/Supabaseclient';
import { Dashboard } from '@mui/icons-material';
import First from '../../[Detailsid]/first/First';
import Link from 'next/link';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [check, setcheck] = useState(' ');

    const router = useRouter();

    const supabase = createClientComponentClient(supabaseUrl, supabaseKey)

    const handleSignup = async (e) => {
        e.preventDefault();
        let { data, error } = await supabase.auth.signUp({
            email,
            password,

        });
        router.refresh();
        setEmail('');
        setPassword('');
        setcheck(<>
<Alert icon={<CheckIcon  fontSize="inherit" />} severity="success">
                            Here is a gentle confirmation that your account was successful.
                        </Alert>
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

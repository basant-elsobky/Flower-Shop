'use client'
import { useState } from 'react';
import './page.css';
import supabase from '@/app/Config/Supabaseclient';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = async () => {
        let { data, error } = await supabase.auth.signUp({
            email: {email},
            password: {password}
        });
        setEmail('');
        setPassword('');
    };
    const handleSignIn = async () => {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: {email},
            password: {password}
        });
        setEmail('');
        setPassword('');
    };
    return (
        <div className='signupu'>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                    <form >
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="Email" required="" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="pswd" placeholder="Password" required="" />
                        <button onClick={handleSignup} type="submit">Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="pswd" placeholder="Password" required="" />
                        <button type="button" onClick={handleSignIn}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

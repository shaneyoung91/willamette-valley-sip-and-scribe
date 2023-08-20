import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function LoginPage({setIsLoggedIn, user, setUser }) {

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    return (
        <div>
            <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Email"
                    value={setUser.email}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
                &nbsp; &nbsp; &nbsp;
                <input
                    type="password"
                    placeholder="Password"
                    value={setUser.password}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
                &nbsp; &nbsp; &nbsp;
                <Button onClick={handleLogin}>Login</Button>
        </div>
    )
}

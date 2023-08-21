import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function LoginPage({setIsLoggedIn, user, setUser }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    return (
        <div>
            <h2>Login</h2>
                <form autoComplete='off'>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    &nbsp; &nbsp; &nbsp;
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    &nbsp; &nbsp; &nbsp;
                    <Button onClick={handleLogin}>Login</Button>
                </form>
        </div>
    )
}

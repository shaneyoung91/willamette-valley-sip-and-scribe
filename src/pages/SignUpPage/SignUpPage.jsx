import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function SignUpPage({ setIsLoggedIn, user, setUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = () => {
        const newUser = {
            ...user,
            name: name,
            email: email,
            password: password,
            confirmPW: confirmPW,
        };
        setUser(newUser);

        setIsLoggedIn(true);
    }
    
    return (
        <div>
            <h2>Sign Up</h2>
            <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                &nbsp; &nbsp; &nbsp;
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPW}
                    onChange={(e) => setConfirmPW(e.target.value)}
                    required
                />
                &nbsp; &nbsp; &nbsp;
                <Button onClick={handleSignUp}>Sign Up</Button>
        </div>
    )
}

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';

export default function AuthPage({ setIsLoggedIn, user, setUser }) {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleLogin = () => {
        setIsLoginVisible(!isLoginVisible);
    }
    
    return (
        <div>
            <h3>AuthPage</h3>
            <Button onClick={toggleLogin}>
                {isLoginVisible ? "DON'T HAVE AN ACCOUNT? SIGN UP!" : 'EXISTING USER? LOGIN HERE!'}
            </Button>
            {isLoginVisible ? 
                <LoginPage setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />
                : <SignUpPage setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser} />
            }
        </div>
    );
}

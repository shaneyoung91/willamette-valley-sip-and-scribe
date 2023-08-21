import { useState } from 'react';
import { Button } from 'react-bootstrap';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setIsLoggedIn, setUser }) {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleLogin = () => {
        setIsLoginVisible(!isLoginVisible);
    }
    
    return (
        <div>
            <h3>AuthPage</h3>
            {isLoginVisible ? 
                <LoginForm setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
                : <SignUpForm setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
            }
            <Button onClick={toggleLogin}>
                {isLoginVisible ? "DON'T HAVE AN ACCOUNT? SIGN UP!" : 'EXISTING USER? LOGIN HERE!'}
            </Button>
        </div>
    );
}

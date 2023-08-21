import { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginPage from '../LoginPage/LoginPage';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setIsLoggedIn, setUser }) {
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
                <LoginPage setUser={setUser} />
                : <SignUpForm setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
            }
        </div>
    );
}

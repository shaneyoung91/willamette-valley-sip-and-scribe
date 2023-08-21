import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ isLoggedIn, setIsLoggedIn, setUser }) {
    const navigate = useNavigate();
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    
    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
            setIsLoggedIn(true);
            navigate('/wineries');
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <div>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email:</label> &nbsp;
                        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                        &nbsp; &nbsp;
                    <label>Password:</label> &nbsp;
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                        &nbsp; &nbsp;
                    <Button type="submit">LOG IN</Button>
                </form>
                &nbsp; &nbsp;                
            </div>
        </div>
        );
    }

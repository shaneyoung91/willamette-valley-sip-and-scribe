import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
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
            navigate('/wineries');
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <div>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Form.Control type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
                    <br></br>
                    <Form.Control type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
                    <br></br>
                    <Button type="submit">LOG IN</Button>
                </Form>            
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
        );
    }

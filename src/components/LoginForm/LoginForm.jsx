import { Button, Form, FloatingLabel } from 'react-bootstrap';
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
            <br></br>
            <div>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingInput" label='Email Address'>
                        <Form.Control
                            type="email" 
                            name="email" 
                            placeholder="name@example.com" 
                            value={credentials.email} 
                            onChange={handleChange} 
                            style={{height: '50px', width: '40%'}}
                            required 
                        />
                    </FloatingLabel>
                    <br></br>
                    <FloatingLabel controlId="floatingInput" label='Password'>
                        <Form.Control
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={credentials.password} 
                        onChange={handleChange}
                        style={{height: '50px', width: '40%'}}
                        required 
                    />
                    </FloatingLabel>
                    <br></br>
                    <Button type="submit">LOG IN</Button>
                </Form>            
            </div>
            <br></br>
            <p className="error-message">&nbsp;{error}</p>
        </div>
        );
    }

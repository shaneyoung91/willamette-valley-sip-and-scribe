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
        <>
            <h2>Login</h2>
            <br></br>
            <div>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email" 
                            name="email" 
                            placeholder="Enter email" 
                            value={credentials.email} 
                            onChange={handleChange} 
                            style={{width: '40%'}}
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={credentials.password} 
                            onChange={handleChange}
                            style={{width: '40%'}}
                            required 
                        />
                    <br></br>
                    <Button type="submit">SUBMIT</Button>
                </Form.Group>   
                </Form>         
            </div>
            <br></br>
            <p className="error-message">&nbsp;{error}</p>
        </>
        );
    }

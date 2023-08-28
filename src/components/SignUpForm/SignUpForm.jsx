import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({ setUser }) {
    const [formData, setFormData] = useState({
        'name': '',
        'email': '',
        'password': '',
        'confirmPW': '',
    })
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (evt) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [evt.target.name] : evt.target.value,
            error: ''
        }));
    }

    const handleSignUp = async (evt) => {
        evt.preventDefault()
        try {
            await signUp(formData)
            setUser(formData)
            navigate('/wineries')
        } catch (error) {
            setFormData({error: 'Sign Up Failed - Try Again'});
        }
    }
    
    const disable = formData.password !== formData.confirmPW;

    return (
        <>
            <h2>Sign Up</h2>
            <br />
            <Form autoComplete='off' onSubmit={handleSignUp}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            name="name"
                            onChange={handleChange}
                            style={{height: '50px', width: '40%'}}
                            required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicPassword'> 
                    <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                            style={{height: '50px', width: '40%'}}
                            required
                            />
                </Form.Group>
                <Form.Group>
                    <Form.Label controlId="floatingInput" label='Password'>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                            style={{height: '50px', width: '40%'}}
                            required
                            />
                        <Form.Text className="text-muted">
                            Password must be at least 3 characters long.
                        </Form.Text>
                </Form.Group>
                &nbsp; &nbsp;
                <Form.Group>
                    <Form.Label controlId="floatingInput" label='Confirm Password'>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={formData.confirmPW}
                            name="confirmPW"
                            onChange={handleChange}
                            style={{height: '50px', width: '40%'}}
                            required
                            />
                </Form.Group>
                <br />
                <Button type="submit" disabled={disable}>SIGN UP</Button>
            </Form>
            <br />
            <br />
            <p className="error-message">&nbsp;{error}</p>
        </>
    )
}

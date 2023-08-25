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
        <div>
            <h2>Sign Up</h2>
            <br></br>
            <Form autoComplete='off' onSubmit={handleSignUp}>
                <FloatingLabel controlId="floatingInput" label='Name'>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                        style={{height: '50px', width: '40%'}}
                        required
                    />
                </FloatingLabel>
                &nbsp; &nbsp; &nbsp;
                <FloatingLabel controlId="floatingInput" label='Email Address'>
                    <Form.Control
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        style={{height: '50px', width: '40%'}}
                        required
                        />
                </FloatingLabel>
                &nbsp; &nbsp; &nbsp;
                <FloatingLabel controlId="floatingInput" label='Password'>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        style={{height: '50px', width: '40%'}}
                        required
                        />
                </FloatingLabel>
                &nbsp; &nbsp; &nbsp;
                <FloatingLabel controlId="floatingInput" label='Confirm Password'>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={formData.confirmPW}
                        name="confirmPW"
                        onChange={handleChange}
                        style={{height: '50px', width: '40%'}}
                        required
                        />
                </FloatingLabel>
                <br></br>
                <Button type="submit" disabled={disable}>Sign Up</Button>
            </Form>
            &nbsp;
        </div>
    )
}

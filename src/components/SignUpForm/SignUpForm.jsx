import { Button } from 'react-bootstrap';
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
            <form autoComplete='off' onSubmit={handleSignUp}>
                <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                        required
                    />
                &nbsp; &nbsp; &nbsp;
                <input
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        required
                    />
                &nbsp; &nbsp; &nbsp;
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    required
                    />
                &nbsp; &nbsp; &nbsp;
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPW}
                    name="confirmPW"
                    onChange={handleChange}
                    required
                    />
                &nbsp; &nbsp; &nbsp;
                <Button type="submit" disabled={disable}>Sign Up</Button>
            </form>
            &nbsp;
        </div>
    )
}

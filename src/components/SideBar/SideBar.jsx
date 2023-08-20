import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


export default function SideBar({ isLoggedIn }) {
    const navigate = useNavigate();

    const handleClick = (evt) => {
        // If not logged in, redirect to AuthPage
        if (!isLoggedIn) {
            navigate('/auth');
            evt.preventDefault()
        } else {
            navigate('/reviews/new');
            evt.preventDefault()
        }
    };
    
    return (
        <>
            <Navbar expand="lg">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">About</Nav.Link>
                    </Nav.Item>
                    &nbsp;
                    <Nav.Item>
                        <Nav.Link href="/wineries">Explore Wineries</Nav.Link>
                    </Nav.Item>
                    &nbsp;
                    <Nav.Item>
                        <Nav.Link href="/reviews/new" onClick={handleClick}>Reviews</Nav.Link>
                    </Nav.Item>
                    &nbsp;
                    <Nav.Item>
                        <Nav.Link href="/auth">Login / Sign Up</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

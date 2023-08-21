import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import * as userService from '../../pages/utilities/users-service';


export default function SideBar({ isLoggedIn, user, setUser }) {
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

    const handleLogOut = () => {
        userService.logOut();
        setUser(null);
    }
    
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
                    &nbsp;
                    <Nav.Item>
                        <Nav.Link href="/" onClick={handleLogOut}>Log Out</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

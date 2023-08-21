import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import * as usersService from '../../utilities/users-service';

export default function SideBar({ isLoggedIn, setIsLoggedIn, user, setUser }) {
    const navigate = useNavigate();

    const handleClick = (evt) => {
        // If not logged in, redirect to AuthPage
        if (!isLoggedIn) {
            navigate('/auth');
            evt.preventDefault();
        } else {
            navigate('/reviews/new');
            evt.preventDefault();
        }
    };

    const handleLogOut = () => {
        usersService.logOut();
        setUser(null);
        setIsLoggedIn(false);
    }
    
    return (
        <>
            <Navbar expand="lg">
                <Nav>
                    <Nav.Item>
                        <Link to="/">About</Link>
                    </Nav.Item>
                    &nbsp;
                    <Nav.Item>
                        <Link to="/wineries">Explore Wineries</Link>
                    </Nav.Item>
                    &nbsp;
                    <Nav.Item>
                        <Link to="/reviews/new" onClick={handleClick}>Reviews</Link>
                    </Nav.Item>
                    &nbsp;
                    {isLoggedIn ?                     
                        (<Nav.Item>
                            <Link to="/" onClick={handleLogOut}>Log Out</Link>
                        </Nav.Item>)
                        :
                        (<Nav.Item>
                            <Link to="/auth">Login / Sign Up</Link>
                        </Nav.Item>)        
                        }
                </Nav>
            </Navbar>
            &nbsp;
            {isLoggedIn && user && (
                <div>
                    <h3>Welcome, {user.name}!</h3>
                </div>
            )}
        </>
    )
}

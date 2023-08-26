import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import * as usersService from '../../utilities/users-service';
import './SideBar.css';

export default function SideBar({ user, setUser }) {
    const navigate = useNavigate();

    const handleClick = (evt) => {
        // If not logged in, redirect to AuthPage
        if (!user) {
            navigate('/auth');
            evt.preventDefault();
        } else {
            navigate('/myreviews');
            evt.preventDefault();
        }
    };

    const handleLogOut = () => {
        usersService.logOut();
        setUser(null);
    }
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="sidebar">
                <Container>
                    <Navbar.Brand><h2>Willamette Valley Sip & Scribe</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <br></br>
                            <Link to="/">About</Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link to="/wineries">Explore Wineries</Link>
                            &nbsp; &nbsp; &nbsp;
                            {/* &nbsp; &nbsp;
                            &nbsp; &nbsp; */}
                            {/* <Link to="/myreviews" onClick={handleClick}>My Reviews</Link> */}
                            {user ?                     
                                (<Link to="/" onClick={handleLogOut}>Log Out</Link>)
                                :
                                (<Link to="/auth">Login / Sign Up</Link>)        
                            }
                        </Nav>
                        <br></br>
                        <Nav>
                            {user && (
                                <Navbar>
                                    <h6>Signed in as: {user.name.charAt(0).toUpperCase()+user.name.slice(1)}</h6>
                                </Navbar>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

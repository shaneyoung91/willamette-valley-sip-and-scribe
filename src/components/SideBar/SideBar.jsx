import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import * as usersService from '../../utilities/users-service';
// import './SideBar.css';

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
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><h2>Willamette Valley Sip & Scribe</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            &nbsp; &nbsp;
                            <br></br>
                            <Link to="/">About</Link>
                            &nbsp; &nbsp;
                            &nbsp; &nbsp;
                            <Link to="/wineries">Explore Wineries</Link>
                            &nbsp; &nbsp;
                            &nbsp; &nbsp;
                            <Link to="/myreviews" onClick={handleClick}>My Reviews</Link>
                            &nbsp; &nbsp;
                            &nbsp; &nbsp;
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
                                    <h5>Signed in as: {user.name.charAt(0).toUpperCase()+user.name.slice(1)}</h5>
                                </Navbar>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                {/* &nbsp;
                <Nav>
                    <Link to="/">About</Link>
                    <Link to="/wineries">Explore Wineries</Link>
                    <Link to="/myreviews" onClick={handleClick}>My Reviews</Link>
                    {user ?                     
                        (<Link to="/" onClick={handleLogOut}>Log Out</Link>)
                        :
                        (<Link to="/auth">Login / Sign Up</Link>)        
                    }
                </Nav>
                &nbsp;
                {user && (
                    <Navbar className="user-welcome">
                        <h4>Signed in as: {user.name.charAt(0).toUpperCase()+user.name.slice(1)}</h4>
                    </Navbar>
                )}
            </Navbar> */}
        </>
    )
}

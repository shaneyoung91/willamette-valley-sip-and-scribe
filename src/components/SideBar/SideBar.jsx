import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
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
            <Navbar className='sidebar'>
                <Nav className='sidebar-title'>
                    <h1><Link to="/">Willamette Valley Sip & Scribe</Link></h1>
                </Nav>
                &nbsp;
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
            </Navbar>
        </>
    )
}

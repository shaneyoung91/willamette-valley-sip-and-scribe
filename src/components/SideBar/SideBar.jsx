import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export default function SideBar() {
    return (
        <>
            <Navbar expand="lg">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/wineries">Explore Wineries</Nav.Link>
                    </Nav.Item>
                    &nbsp;
                    <Nav.Item>
                        <Nav.Link href="/reviews/new">Reviews</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    )
}

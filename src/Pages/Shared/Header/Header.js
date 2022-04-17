import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleLogout = () => {
        signOut(auth)
    }


    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3 className='text-bold'>Helping Hand</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home#services">Services</Nav.Link>
                        <Nav.Link href="/home#reviews">Client Feedback</Nav.Link>

                    </Nav>
                    
                    <Nav>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {   user ?
                            <button className='btn btn-primary' onClick={handleLogout}>LogOut</button> 
                            :   
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
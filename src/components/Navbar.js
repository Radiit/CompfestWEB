import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"
const NavigationBar = () => {
    return (
    <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>SEA Cinema</Navbar.Brand>
                <Nav>
                    <Nav.Link>Your Ticket</Nav.Link>
                    <Nav.Link>History</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar
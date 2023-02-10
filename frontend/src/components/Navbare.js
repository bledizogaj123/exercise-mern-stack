import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbare = () => {
    return (
        <>
            <Navbar bg="dark " variant="dark">
        <Container>
          <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </>
    )
}
export default Navbare;
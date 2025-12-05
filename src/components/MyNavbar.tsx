import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="md" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-md-block">
              <ul>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className="w-100 d-md-block">
            <img
              style={{ color: "#FFFFFF" }}
              src="public/assets/logos/music.svg"
            ></img>
          </Navbar.Brand>
          <Nav.Link className="text-white d-md-block" href="#login">
            Accedi
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar

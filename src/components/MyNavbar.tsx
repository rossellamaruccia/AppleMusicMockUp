import { Container, Row, Col, Form, InputGroup } from "react-bootstrap"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { CiSearch } from "react-icons/ci"
import { GoHome } from "react-icons/go"
import { PiSquaresFourLight } from "react-icons/pi"
import { IoIosRadio } from "react-icons/io"

const MyNavbar = () => {
  return (
    <>
      <Container className="sideMenuBackground pb-3">
        <Row>
          <Col className="d-md-none redFont mt-3">
            <HiOutlineMenuAlt4 className="" />
          </Col>
          <Col className="mt-3 text-light">
            <img src="public/assets/logos/music.svg"></img>
          </Col>
          <Col className="d-md-none mt-3">
            <a href="#login" className="text-decoration-none redFont ">
              Accedi
            </a>
          </Col>
        </Row>
        <Row className="d-none d-md-block mt-3">
          <Form>
            <Form.Group controlId="validationCustom01">
              <Form.Label></Form.Label>
              <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">
                  <CiSearch className="redFont fs-5 m-2" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Cerca"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Row>
        <Row className="d-none d-md-block my-3">
          <h6>
            <GoHome className="redFont fs-6 m-2" />
            Home
          </h6>

          <h6>
            <PiSquaresFourLight className="redFont fs-6 m-2" />
            Novità
          </h6>

          <h6>
            <IoIosRadio className="redFont fs-6 m-2" />
            Radio
          </h6>
        </Row>
        <Row className="mb-6"></Row>
      </Container>
    </>
  )
}

export default MyNavbar

import { Button, Row, Col, Container, Form, InputGroup } from "react-bootstrap"
import { IoShuffle } from "react-icons/io5"
import {
  IoIosRewind,
  IoIosPlay,
  IoIosFastforward,
  IoIosRepeat,
  IoIosVolumeLow,
} from "react-icons/io"

const MusicPlayer = () => {
    return (
      <>
        <Container fluid className="d-none d-md-block lighterBackground">
          <Row className="p-3">
            <Col className="px-3">
              <IoShuffle />
              <IoIosRewind />
              <IoIosPlay />
              <IoIosFastforward />
              <IoIosRepeat />
            </Col>
            <Col className="px-6 bg-gradient my-0 ">
              <img
                src="public\assets\logos\apple.svg"
                alt="apple logo"
                className="logo"
              />
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Text className="bg-secondary border-0">
                  <IoIosVolumeLow />
                  <Form.Range className="d-inline bg-secondary border-0" />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col>
              <Button className="btn btn-danger">Accedi</Button>
            </Col>
          </Row>
        </Container>
        <Container className="d-block d-md-none fixed-bottom bg-dark">
          <Row>
            <Col>
              <img src="public\assets\logos\apple.svg" className="p-3" />
            </Col>
            <Col></Col>
            <Col>
              <IoIosPlay className="fs-4 mt-3" />
              <IoIosFastforward className="fs-4 mt-3" />
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default MusicPlayer
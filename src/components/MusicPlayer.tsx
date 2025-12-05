import { Button, Row, Col, Container } from "react-bootstrap"

const MusicPlayer = () => {
    return (
      <>
        <Container fluid >
          <Row>
            <Col>
              <Button>*play icon*</Button>
                    </Col>
                    <Col>
                        {/* <p>{artist name}</p>
                        <h3>{song}</h3> */}
                    </Col>
          </Row>
        </Container>
      </>
    )
}

export default MusicPlayer
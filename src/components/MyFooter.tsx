import { Container, Row } from "react-bootstrap"

const MyFooter = () => {
    return (
      <Container className="bg-secondary">
        <Row>
          <p>Italia | English (UK)</p>
        </Row>
        <Row>
          <p>Copyright @2024 Apple.inc. <span>Tutti i diritti riservati</span></p>
        </Row>
        <Row>
          <p>Condizioni dei servizi internet | Apple music e privacy | Avviso sui cookies | Supporto | Disperazione </p>
        </Row>
      </Container>
    )
}

export default MyFooter
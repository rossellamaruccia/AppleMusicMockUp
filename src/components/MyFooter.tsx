import { Row } from "react-bootstrap"

const MyFooter = () => {
    return (
      <>
        <Row className="footerBackground mt-2">
          <p>Italia | English (UK)</p>
        </Row>
        <Row className="footerBackground">
          <p>
            Copyright @2024 Apple.inc.
            <span className="greyFont">Tutti i diritti riservati</span>
          </p>
        </Row>
        <Row className="footerBackground">
          <p className="greyFont">
            Condizioni dei servizi internet | Apple music e privacy | Avviso sui
            cookies | Supporto | Disperazione
          </p>
        </Row>
      </>
    )
}

export default MyFooter
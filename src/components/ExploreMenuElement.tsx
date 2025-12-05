import { Row, Col } from "react-bootstrap"
import { MdKeyboardArrowRight } from "react-icons/md"

interface ExploreMenuElementProps {
  title: string
}

    const ExploreMenuElement = ({ title }: ExploreMenuElementProps) => {
    return (
      <>
        <Row className="rounded-2 align-content-center text-danger my-2 p-3 bg-gradient">
          <Col md={11}>
            <h5>{title}</h5>
                </Col>
          <Col md={1}>
            <MdKeyboardArrowRight />
          </Col>
        </Row>
      </>
    )
    }

    export default ExploreMenuElement
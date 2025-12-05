import { Card } from "react-bootstrap"

interface RadioStationProps {
  description: string
  img_src: string
}
const RadioStation = ({ description, img_src }: RadioStationProps) => {
  return (
    <>
      <Card className="border-0">
        <Card.Body>
          <Card.Title className="small">NUOVA STAZIONE RADIO</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Img src={img_src} className="rounded-2"/>
        </Card.Body>
      </Card>
    </>
  )
}

export default RadioStation

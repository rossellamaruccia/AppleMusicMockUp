import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar"
import MusicPlayer from "./components/MusicPlayer"
import Headings from "./components/Headings"
import { Container, Row, Col } from "react-bootstrap"
import RadioStation from "./components/RadioStation"
import NewRadioEpisodes from "./components/NewRadioEpisodes"
import SmallHeadings from "./components/SmallHeadings"
import SongPreview from "./components/SongPreview"

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3} className="asideNav">
            <MyNavbar />
          </Col>
          <Col className="body">
            <Row>
              <MusicPlayer />
            </Row>
            <Row>
              <Headings title="Novità" />
              <Col md={5}>
                <RadioStation
                  description="Rilassati, al resto pensiamo noi"
                  img_src="public\assets\images\1a.png"
                />
              </Col>
              <Col md={5}>
                <RadioStation
                  description="Ecco la nuova casa della musica latina"
                  img_src="public\assets\images\1b.png"
                />
              </Col>
            </Row>
            <Row>
              <SmallHeadings title="Nuovi episodi radio" />
              <Col md={2}>
                <NewRadioEpisodes
                  description="Pròlogo con Abuelo"
                  img_src="public\assets\images\2a.png"
                />
              </Col>
              <Col md={2}>
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2b.png"
                />
              </Col>
              <Col md={2}>
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2c.png"
                />
              </Col>
              <Col md={2}>
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2d.png"
                />
              </Col>
              <Col md={2}>
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2e.png"
                />
              </Col>
              <Col md={2}>
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2f.png"
                />
              </Col>
            </Row>
            <Row>
              <SmallHeadings title="Nuove Uscite" />

                <SongPreview />

            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

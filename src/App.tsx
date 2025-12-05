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
import ExploreMenuElement from "./components/ExploreMenuElement"
import MyFooter from "./components/MyFooter"

function App() {
  return (
    <>
      <Container fluid className="darkerBackground text-light">
        <Row>
          <Col md={3} className="asideNav">
            <MyNavbar />
          </Col>
          <Col className="body">
            <Row>
              <MusicPlayer />
            </Row>
            <Row className="align-items-end mt-3">
              <Headings title="Novità" />
              <Col xs={6} md={4}>
                <RadioStation
                  description="Rilassati, al resto pensiamo noi"
                  img_src="public\assets\images\1a.png"
                />
              </Col>
              <Col xs={6} md={4}>
                <RadioStation
                  description="Ecco la nuova casa della musica latina"
                  img_src="public\assets\images\1b.png"
                />
              </Col>
              <Col md={4} className="d-none d-md-block">
                <RadioStation
                  description="con React Bootstrap non ce la posso fare"
                  img_src="public\assets\images\1c.png"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <SmallHeadings title="Nuovi episodi radio" />
              <Col xs={4} md={2}>
                <NewRadioEpisodes
                  description="Pròlogo con Abuelo"
                  img_src="public\assets\images\2a.png"
                />
              </Col>
              <Col xs={4} md={2}>
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2b.png"
                />
              </Col>
              <Col xs={4} md={2}>
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2c.png"
                />
              </Col>
              <Col md={2} className="d-none d-md-block">
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2d.png"
                />
              </Col>
              <Col md={2} className="d-none d-md-block">
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2e.png"
                />
              </Col>
              <Col md={2} className="d-none d-md-block">
                <NewRadioEpisodes
                  description="The Wanderer"
                  img_src="public\assets\images\2f.png"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <SmallHeadings title="Nuove Uscite" />

              <SongPreview />
            </Row>
            <Row className="mt-3">
              <SmallHeadings title="Altro da esplorare" />
              <Col xs={12} md={6}>
                <ExploreMenuElement title="Esplora per genere" />
              </Col>
              <Col xs={12} md={6}>
                <ExploreMenuElement title="Decenni" />
              </Col>
              <Col xs={12} md={6}>
                <ExploreMenuElement title="Attività e stati d'animo" />
              </Col>
              <Col xs={12} md={6}>
                <ExploreMenuElement title="Worldwide" />
              </Col>
              <Col xs={12} md={6}>
                <ExploreMenuElement title="Classifiche" />
              </Col>
              <Col xs={12} md={6}>
                <ExploreMenuElement title="Audio spaziale" />
              </Col>
            </Row>
            <MyFooter />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App

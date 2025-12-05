import { useEffect, useState } from "react"
// import { type SongsFetch } from "../types/types"
import { type Data } from "../types/types"
// import { type Artist } from "../types/types"
// import { type Album } from "../types/types"
import { Col } from "react-bootstrap"

const SongPreview = () => {
  const [songsDetails, setSongsDetails] = useState<Data[]>()
  // const [artistDetails, setArtistDetails] = useState<Artist[]>()
  // const [albumDetails, setAlbumDetails] = useState<Album[]>()

  const FetchFunction = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=tameimpala"
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error()
        }
      })
      .then((songs) => {
        setSongsDetails(songs.data)
 
      })
        .catch((err) => {
          console.log("errore nella fetch", err)
      })
    }
    
    useEffect(() => { FetchFunction() }, [])
    
  return (
    <>
      {
        songsDetails?.map((song, i) => {
          return (
            <>
              <Col md={2} key={i}>
                <img
                  src={song.album.cover}
                  alt="song's album preview"
                  className="w-100"
                />
                <small>
                  {song.title} + {song.artist.name}
                </small>
              </Col>
            </>
          )
        })
      }
    </>
  )
}

export default SongPreview
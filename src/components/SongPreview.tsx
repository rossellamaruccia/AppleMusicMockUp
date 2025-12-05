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
        console.log(songsDetails)
      })
        .catch((err) => {
          console.log("errore nella fetch", err)
      })
    }
    
    useEffect(() => { FetchFunction() }, [])
    
  return (
    <>
      {
        songsDetails?.map((song) => {
          return (
            <>
              <Col md={2} key={song.id}>
                <img
                  src={song.album.cover_small}
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



// export default SongPreview

// import { useState, useEffect } from "react"
// import NewsCard from "./NewsCard"
// import { Container, Row, Col } from "react-bootstrap"
// import { type Result } from "../types/types"

// const myUrl: string = "https://api.spaceflightnewsapi.net/v4/articles"

// const FetchComponent = () => {
//   const [newsObj, setNewsObj] = useState<Result[]>([])

//   const FetchFunc = () => {
//     fetch(myUrl)
//       .then((res) => {
//         if (res.ok) {
//           return res.json()
//         } else {
//           throw new Error()
//         }
//       })
//       .then((NewsObj) => {
//         console.log(NewsObj)
//         console.log(NewsObj.results)
//         setNewsObj(NewsObj.results)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   useEffect(() => {
//     FetchFunc()
//   }, [])

//   return (
//     <>
//       <Container>
//         <Row className="justify-content-center">
//           <Col>
//             <h3 className="text-center">News from the infinite Space</h3>
//           </Col>
//         </Row>
//         <Row className="justify-content-center">
//           {newsObj.map((news) => {
//             return (
//               <Col xs={12} md={4}>
//                 <NewsCard key={news.id} newsInfo={news} />
//               </Col>
//             )
//           })}
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default FetchComponent

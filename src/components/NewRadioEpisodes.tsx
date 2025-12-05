interface RadioEpisodesProps {
  description: string
  img_src: string
}
const NewRadioEpisodes = ({ description, img_src }: RadioEpisodesProps) => {
    return (
        <>
            <img src={img_src} alt="episode preview with the author's picture" className="w-100"/>
            <small>{description}</small>
        </>
    )
}

export default NewRadioEpisodes
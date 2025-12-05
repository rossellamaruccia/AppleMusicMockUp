interface HeadingsProps {
  title: string
}
const Headings = ({ title }: HeadingsProps) => {
  return (
    <>
      <h3>{title}</h3>
      <hr />
    </>
  )
}

export default Headings

interface SmallHeadingsProps {
  title: string
}
const SmallHeadings = ({ title }: SmallHeadingsProps) => {
  return (
    <>
      <h5>{title}</h5>
      <hr />
    </>
  )
}

export default SmallHeadings

import { MdKeyboardArrowRight } from "react-icons/md"

interface SmallHeadingsProps {
  title: string
}
const SmallHeadings = ({ title }: SmallHeadingsProps) => {
  return (
    <>
      <h5>
        {title}

          <MdKeyboardArrowRight className="greyFont" />

      </h5>
      <hr className="greyFont" />
    </>
  )
}

export default SmallHeadings

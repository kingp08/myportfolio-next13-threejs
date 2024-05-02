import Link from 'next/link'
import { BsFillArrowLeftCircleFill} from "react-icons/bs";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className='text-secondary flex item-center'>
          <BsFillArrowLeftCircleFill color='primary'/>
          Go back to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
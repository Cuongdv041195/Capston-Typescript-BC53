import { useParams } from 'react-router-dom'
import CourseProfile from './CourseProfile'
import ShowTimes from './ShowTimes/ShowTimes'

const Details = () => {
  const { courseID } = useParams()
  return (
    <div>
      <CourseProfile courseID={courseID} />
      <ShowTimes courseID={courseID} />
    </div>
  )
}

export default Details

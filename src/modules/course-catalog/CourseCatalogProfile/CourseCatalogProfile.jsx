import classes from './styles.module.css'
import { Container, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getDetailCourseCatalogAPI } from '../../../apis/course'

const CourseCatalogProfile = ({ courseID }) => {
  const { data = {} } = useQuery({
    queryKey: ['course-catalog-detail', courseID],
    queryFn: () => getDetailCourseCatalogAPI(courseID),
    // enabled: !!courseID,
  })

  return (
    <div className={classes.root}>
      <Container>
        <Typography
          style={{ fontSize: '25px', fontWeight: 'bold', color: '#fff' }}
        >
          {data[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
        </Typography>
      </Container>
    </div>
  )
}

export default CourseCatalogProfile

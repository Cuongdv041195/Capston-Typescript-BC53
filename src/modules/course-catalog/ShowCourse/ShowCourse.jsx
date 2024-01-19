import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getDetailCourseCatalogAPI } from '../../../apis/course'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './styles.module.css'

const ShowCourse = ({ courseID }) => {
  const navigate = useNavigate()
  const { data = [] } = useQuery({
    queryKey: ['course-catalog-detail', courseID],
    queryFn: () => getDetailCourseCatalogAPI(courseID),
    // enabled: !!courseID,
  })

  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return (
    <Container
      maxWidth="lg"
      style={{ paddingTop: '50px', marginBottom: '30px' }}
    >
      <Typography
        component="h1"
        style={{ marginBottom: '30px', fontSize: '30px' }}
      >
        Các Khóa Học Phổ Biến
      </Typography>
      <Grid container spacing={4}>
        {data?.map((item) => (
          <Grid item xs={6} md={4} lg={3} key={item.maKhoaHoc}>
            <Card style={{ padding: '15px' }} className={classes.card_item}>
              <CardMedia
                sx={{ height: 250, width: '100%', border: '1px outset ' }}
                image={item.hinhAnh}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="truncate"
                  style={{ fontWeight: 'bold', fontSize: '1.3rem' }}
                >
                  {item.tenKhoaHoc}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="truncate "
                >
                  {item.moTa}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  justifyContent: 'right',
                  borderTop: '1px solid #9e9e9e',
                }}
              >
                <div className={classes.rate}>★★★★★</div>

                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    navigate(`/course/${item.maKhoaHoc}`)
                  }}
                >
                  Đăng Ký
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ShowCourse

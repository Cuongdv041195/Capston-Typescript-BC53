import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getListCoursePageAPI } from '../../../apis/course'
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
import classes from './styles.module.css'

const Course = () => {
  const navigate = useNavigate()
  const { data = [] } = useQuery({
    queryKey: ['list-course'],
    queryFn: getListCoursePageAPI,
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
    <div id="course">
      <Container
        maxWidth="lg"
        style={{ padding: '50px 0', marginBottom: '30px' }}
      >
        <Typography
          component="h1"
          style={{ fontSize: '30px', marginBottom: '30px', fontWeight: 'bold' }}
        >
          Các Khóa Học Mới Nhất Tại CyberSoft
        </Typography>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid item xs={6} md={4} lg={3} key={item.maKhoaHoc}>
              <Card className={classes.card_item}>
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
                  <div className="rate">★★★★★</div>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={() => {
                      navigate(`course/${item.maKhoaHoc}`)
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
    </div>
  )
}

export default Course

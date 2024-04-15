import {
  Button,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getDetailCourseAPI } from '../../../apis/course'
import classes from './styles.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { actBookCourse } from '../../../apis/booking'
import { getInfoUser } from '../../../apis/userAPI'
import Swal from 'sweetalert2'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { CURRENT_USER } from '../../../constants'
import { PATH } from '../../../routes/path'
const CourseProfile = ({ courseID }) => {
  const { data } = useQuery({
    queryKey: ['course-details', courseID],
    queryFn: () => getDetailCourseAPI(courseID),
  })

  const navigate = useNavigate()
  const infoUser = useQuery({
    queryKey: 'info',
    queryFn: getInfoUser,
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
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={6} style={{ margin: '70px 0', paddingLeft: '50px' }}>
            <Typography component="h1" className={classes.title}>
              Khóa Học: {data?.tenKhoaHoc}
            </Typography>

            <Typography
              component="h1"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <RemoveRedEyeIcon />
              Lượt Xem: {data?.luotXem}
            </Typography>
            {/* <Typography component="h1">
              Số Lượng Học Viên Đăng Ký: {data?.soLuongHocVien}
            </Typography> */}
            <Typography component="h1">
              Chuyên Môn: {data?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </Typography>
            <Typography component="h1" className={classes.cost}>
              <AttachMoneyIcon />
              Giá Khóa Học: 599k
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  if (!localStorage?.getItem(CURRENT_USER)) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Bạn chưa đăng nhập',
                      text: 'Bạn có muốn đăng nhập không ?',
                      confirmButtonText: 'Đồng ý',
                      confirmButtonColor: '#1976d2',
                      showDenyButton: true,
                      denyButtonText: 'Không',
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navigate(PATH.SIGN_IN)
                      }
                    })
                    return
                  }
                  const payload = {
                    maKhoaHoc: data?.maKhoaHoc,
                    taiKhoan: infoUser?.data?.taiKhoan,
                  }

                  Swal.fire({
                    icon: 'warning',
                    title: `Xác Nhận Đăng Ký Khóa Học: ${data?.tenKhoaHoc}`,
                    text: `Kiểm tra chính xác Khóa Học `,
                    confirmButtonText: 'Đồng ý',
                    confirmButtonColor: '#1976d2',
                    showDenyButton: true,
                    denyButtonText: 'Không',
                  })
                    .then((result) => {
                      if (result.isConfirmed) {
                        actBookCourse(payload)
                        Swal.fire({
                          icon: 'success',
                          title: 'Đăng Ký Thành Công',
                          text: 'Kiểm tra Khóa Học Tại Thông Tin Tài Khoản',
                        })
                      }

                      // alert('dang ky thanh cong')
                    })
                    .catch()
                }}
              >
                Đăng Ký
              </Button>
            </CardActions>
          </Grid>
          <Grid item xs={6} style={{ margin: '70px 0', paddingLeft: '50px' }}>
            <CardMedia>
              <img
                src={data?.hinhAnh}
                style={{
                  width: '300px',
                  height: '250px',
                  borderRadius: '10px',
                }}
              />
            </CardMedia>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CourseProfile

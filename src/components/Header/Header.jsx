import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  Modal,
  NativeSelect,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

import React, { useState } from 'react'
import { PATH } from '../../routes/path'
import classes from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import logoBook from '../../assets/bee_logo.png'
import { useAuth } from '../../contexts/UserContext/UserContext'
import { useQuery } from '@tanstack/react-query'
import { getListCourseAPI, getListCourseCatalogAPI } from '../../apis/course'
import { getInfoUser } from '../../apis/userAPI'
import Swal from 'sweetalert2'
import { actDeleteCourse } from '../../apis/booking'
import ScrollToTop from 'react-scroll-to-top'
const Header = () => {
  const navigate = useNavigate()
  const { currentUser, handleLogout } = useAuth()
  const { data } = useQuery({
    queryKey: 'course-catalog',
    queryFn: getListCourseCatalogAPI,
  })
  const [course, setCourse] = useState('')
  const handleChangeCourse = (event) => {
    setCourse(event.target.value)
    navigate(`/catalog/${event.target.value}`)
  }
  const [key, setKey] = useState()
  const [listKhoaHoc, setListKhoaHoc] = useState()

  const [isLoading, setIsLoading] = useState(false)
  const [dataUser, setDataUser] = useState('')

  const renderCourse = (arr) => {
    return arr.map((item) => {
      return (
        <option key={item.maDanhMuc} value={item.maDanhMuc}>
          {item.tenDanhMuc}
        </option>
      )
    })
  }

  React.useEffect(() => {
    if (!key) {
      return
    }
    setIsLoading(true)
    let timer = setTimeout(
      () =>
        getListCourseAPI(key)
          .then((res) => {
            setListKhoaHoc(res)
            setIsLoading(false)
          })
          .catch(() => {
            setListKhoaHoc([])
            setIsLoading(false)
          }),
      800
    )
    return () => {
      clearTimeout(timer)
    }
  }, [key])

  const handleSearch = (event) => {
    if (event?.target?.value === '' || event?.target?.value == undefined) {
      setListKhoaHoc([])
      setKey()
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    setKey(event?.target?.value)
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  React.useEffect(() => {
    getInfoUser(dataUser)
      .then((res) => {
        setDataUser(res)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [open])

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 900,
  //   height: 600,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   overflowY: 'scroll',
  //   boxShadow: 24,
  //   p: 3,
  // }

  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <div className={classes.root}>
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  navigate(PATH.HOME)
                }}
                sx={{ mr: 2, background: 'transparent !important' }}
              >
                <img src={logoBook} style={{ width: '40px' }} alt="" />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, color: '#f55f8d;', fontWeight: '700' }}
                >
                  ELEARNING
                </Typography>
              </IconButton>
              <div className={classes.selectCourse}>
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    value={course}
                    name="course"
                    className={classes.nativeSelect}
                    onChange={handleChangeCourse}
                  >
                    <option value="" disabled>
                      Danh Mục Khóa Học
                    </option>
                    {data && renderCourse(data)}
                  </NativeSelect>
                </FormControl>
              </div>
              <div
                className={classes.list_khoahoc_wrapper}
                style={{ marginRight: '20px', width: '400px' }}
              >
                <Paper elevation={4} component="form">
                  <InputBase
                    placeholder="Tìm kiếm khóa học"
                    className={classes.inputBase}
                    onChange={(event) => {
                      handleSearch(event)
                    }}
                  />

                  {isLoading && (
                    <CircularProgress
                      style={{
                        width: '30px',
                        height: '30px',
                        position: 'absolute',
                        top: '5px',
                      }}
                    />
                  )}
                </Paper>

                {key && (
                  <div className={classes.list_khoahoc}>
                    {listKhoaHoc?.length > 0 ? (
                      listKhoaHoc?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className={classes.title_khoahoc_wrapper}
                            onClick={() => {
                              navigate(`course/${item?.maKhoaHoc}`)
                              setKey()
                            }}
                          >
                            <div className={classes.title_khoahoc}>
                              {item?.tenKhoaHoc}
                            </div>
                          </div>
                        )
                      })
                    ) : (
                      <div className={classes.title_khoahoc_wrapper}>
                        Không Tìm Thấy Khóa Học !!!
                      </div>
                    )}
                  </div>
                )}
              </div>
              {currentUser ? (
                <div>
                  <Stack direction={'row'} spacing={2}>
                    <Typography
                      className={classes.username}
                      onClick={handleOpen}
                    >
                      {currentUser.hoTen}
                    </Typography>
                    <Button
                      className={classes.logout_button}
                      size="large"
                      variant="contained"
                      onClick={() => {
                        handleLogout()
                        navigate(PATH.SIGN_IN)
                      }}
                    >
                      Đăng Xuất
                    </Button>
                  </Stack>
                </div>
              ) : (
                <Stack spacing={2} direction={'row'}>
                  <Button
                    variant="contained"
                    onClick={() => navigate(PATH.SIGN_UP)}
                  >
                    Đăng Ký
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => navigate(PATH.SIGN_IN)}
                  >
                    Đăng Nhập
                  </Button>
                </Stack>
              )}
            </Toolbar>
          </div>
          <div
            style={{
              minHeight: '70px',
            }}
          ></div>
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={classes.modal}>
          <Typography
            component="h1"
            // style={{
            //   fontSize: '25px',
            //   fontWeight: 'bold',
            //   textAlign: 'center',
            //   padding: '20px 0',
            // }}
          >
            Danh Sách Khóa Học Đăng Ký:
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography component="h2" sx={{ mt: 2 }}>
                <span style={{ fontWeight: 'bold' }}>Thông Tin Tài Khoản:</span>{' '}
                {dataUser?.hoTen}
              </Typography>
              <Typography component="h2" sx={{ mt: 2 }}>
                {' '}
                <span style={{ fontWeight: 'bold' }}>Email:</span>{' '}
                {dataUser?.email}
              </Typography>
              <Typography component="h2" sx={{ mt: 2 }}>
                {' '}
                <span style={{ fontWeight: 'bold' }}>Số Điện Thoại:</span>{' '}
                {dataUser?.soDT}
              </Typography>
              <Typography component="h2" sx={{ mt: 2 }}>
                {' '}
                <span style={{ fontWeight: 'bold' }}>Mã Người Dùng:</span>{' '}
                {dataUser?.maLoaiNguoiDung}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              {dataUser?.chiTietKhoaHocGhiDanh?.length > 0 ? (
                dataUser?.chiTietKhoaHocGhiDanh?.map((item, index) => {
                  return (
                    <div key={index} className="wrapper_khoaHoc">
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ mt: 2, width: '100%', fontWeight: 'bold' }}
                      >
                        ● {item.tenKhoaHoc}
                        <span
                          className={classes.button_delete}
                          onClick={() => {
                            setOpen(false)
                            const payload = {
                              maKhoaHoc: item?.maKhoaHoc,
                              taiKhoan: dataUser?.taiKhoan,
                            }

                            Swal.fire({
                              icon: 'warning',
                              title: `Xác Nhận Hủy Khóa Học: ${item?.tenKhoaHoc}`,
                              text: 'Kiểm tra chính xác Khóa Học',
                              confirmButtonText: 'Đồng ý',
                              confirmButtonColor: '#1976d2',
                              showDenyButton: true,
                              denyButtonText: 'Không',
                            })
                              .then((result) => {
                                if (result.isConfirmed) {
                                  actDeleteCourse(payload)
                                  Swal.fire({
                                    icon: 'success',
                                    title: 'Bạn Đã Hủy Thành Công',
                                  })
                                }

                                // alert('dang ky thanh cong')
                              })
                              .catch()
                          }}
                        >
                          X
                        </span>
                      </Typography>
                      <Typography component="h4" id="modal-modal-description">
                        Mã Khóa Học: {item.maKhoaHoc}
                      </Typography>
                    </div>
                  )
                })
              ) : (
                <Typography
                  style={{
                    fontSize: '30px',
                    textAlign: 'center',
                    color: '#9e9e9e',
                    marginTop: '50px',
                  }}
                >
                  Chưa Đăng Ký Khóa Học Nào !!!
                </Typography>
              )}
            </Grid>
          </Grid>
        </div>
      </Modal>
      <ScrollToTop top={50} color={'#fff'} />
    </>
  )
}

export default Header

import { useAuth } from '../../../contexts/UserContext/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { LoadingButton } from '@mui/lab'
import { signinAPI } from '../../../apis/userAPI'
import { Container, Grid, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import { PATH } from '../../../routes/path'

const SignIn = () => {
  const { currentUser, handleSignin: handleSigninContext } = useAuth()
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
  })
  const { mutate: handleSignin, isPending } = useMutation({
    mutationFn: (values) => signinAPI(values), //{ taiKhoan : "" , matKhau:""}
    onSuccess: (values) => {
      //values là thông tin user
      handleSigninContext(values)
      if (values.maLoaiNguoiDung === 'HV') navigate(PATH.HOME)
      if (values.maLoaiNguoiDung === 'GV') navigate(PATH.ADMIN)
    },
    onError: () => {
      // console.log('error', error)
      Swal.fire({
        icon: 'error',
        title: 'Sai Tên Đăng Nhập Hoặc Mật Khẩu',
        confirmButtonText: 'Đồng ý',
        confirmButtonColor: '#1976d2',
      })
    },
  })
  const onSubmit = (formValues) => {
    handleSignin(formValues) // { taiKhoan : "" , matKhau:""}
  }

  if (currentUser) {
    return <Navigate to={PATH.HOME} />
  }
  return (
    <div style={{ background: '#fff' }}>
      <Container>
        <Typography
          style={{
            textAlign: 'center',
            padding: '30px 0 0',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Đăng Nhập Tài Khoản CyberSoft Của Bạn
        </Typography>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          padding={'50px 0'}
        >
          <Grid item md={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Tài khoản"
                fullWidth
                {...register('taiKhoan')}
                style={{ marginBottom: '15px' }}
              />
              <TextField
                label="Mật khẩu"
                type="password"
                fullWidth
                {...register('matKhau')}
                style={{ marginBottom: '15px' }}
              />
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isPending}
                fullWidth
              >
                Đăng nhập
              </LoadingButton>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SignIn

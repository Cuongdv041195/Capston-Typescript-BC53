import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import logoBook from '../../assets/BCT.png'
import fblogo from '../../assets/facebook-logo.png'
import youtubelogo from '../../assets/youtube-logo.png'
import Swal from 'sweetalert2'
import classes from './styles.module.css'

const Footer = () => {
  const [email, setEmail] = useState()
  const [validate, setValidate] = useState(false)
  return (
    <div style={{ backgroundColor: '#1E1E2A', color: '#fff' }} id="footer">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6} padding={'30px 50px'}>
            <Typography component="h1" style={{ fontWeight: '700' }}>
              Cypersoft Academy - Hệ Thống đào tạo lập trình chuyên sâu theo dự
              án thực tế
            </Typography>
            <ul style={{ listStyle: 'none', marginTop: '30px' }}>
              <li>Cơ sở 1: 376 Võ Văn Tần, Quận 3</li>
              <li>Cơ sở 2: 459 Sư Vạn Hanh, Quận 10</li>
              <li>Cơ sở 3: 82 Ung Văn Khiêm, Quận Bình Thạnh</li>
            </ul>
            <Typography
              component="h1"
              style={{
                marginTop: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Hotline: 096.105.1011 - 098.407.5835
            </Typography>
            <Stack direction={'row'}>
              <Grid item xs={2}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/lophocviet"
                  rel="noreferrer"
                >
                  <img className={classes.footerPartner} src={fblogo} />
                </a>
              </Grid>
              <Grid item xs={2}>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@CyberSoftAcademy"
                  rel="noreferrer"
                >
                  <img className={classes.footerPartner} src={youtubelogo} />
                </a>
              </Grid>
            </Stack>

            <img src={logoBook} style={{ marginTop: '30px' }} />
          </Grid>
          <Grid item xs={6} padding={'30px 50px'}>
            <Typography component="h1" style={{ fontWeight: '700' }}>
              Đăng ký nhận Ưu đãi & Bài viết mới
            </Typography>
            <Typography style={{ fontSize: '12px', marginTop: '10px' }}>
              CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình
              CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp
              dẫn đến các bạn.
            </Typography>
            <form style={{ marginTop: '30px' }}>
              <Stack spacing={3} className={classes.input}>
                <TextField label="Họ tên" />
                <TextField
                  label="Email"
                  required
                  onChange={(e) => {
                    setValidate(false)
                    setEmail(e?.target?.value)
                  }}
                />
                {validate && (
                  <div style={{ color: 'red', marginTop: '10px' }}>
                    Vui Lòng Nhập Email!!
                  </div>
                )}
                <TextField label="Địa chỉ liên hệ" />
                <Button
                  variant="contained"
                  size="large"
                  // type="submit"
                  onClick={() => {
                    if (!email) {
                      setValidate(true)
                      return
                    }
                    Swal.fire({
                      icon: 'success',
                      title: 'Đăng Ký Thành Công',
                      confirmButtonText: 'Đồng ý',
                      confirmButtonColor: '#1976d2',
                    })
                  }}
                >
                  Đăng Ký Tư Vấn
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer

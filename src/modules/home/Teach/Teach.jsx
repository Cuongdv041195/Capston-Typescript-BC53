import { CardContent, Container, Grid, Typography } from '@mui/material'
import pic1 from '../../../assets/pic1.png'
import pic2 from '../../../assets/pic2.png'
import pic3 from '../../../assets/pic3.png'
import classes from './style.module.css'

const Teach = () => {
  return (
    <div>
      <div className={classes.background}>
        <Container>
          <Grid
            container
            className={classes.wrapper}
            style={{ height: '500px' }}
          >
            <Grid item xs={4} className={classes.item}>
              <Typography
                component="h3"
                style={{
                  fontSize: '40px',
                  marginBottom: '15px',
                  textAlign: 'left',
                  lineHeight: 'normal',
                }}
              >
                Hãy đến giảng dạy với chúng tôi
              </Typography>
              <Typography style={{ textAlign: 'left' }}>
                Trở thành giảng viên và thay đổi cuộc sống của mọi người, bao
                gồm cả cuộc sống của chính bạn
              </Typography>

              {/* <Button
                style={{ marginTop: '25px', width: '100px', color: '#fff' }}
              >
                Bắt Đầu
              </Button> */}
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ backgroundColor: '#fff' }}>
        <Container>
          {' '}
          <Typography component="h1" className={classes.title}>
            Có quá nhiều lý do để bắt đầu
          </Typography>
          <Grid container className={classes.wrapper}>
            <Grid item xs={4} className={classes.item}>
              <img src={pic1} alt="" />
              <CardContent>
                <Typography component="h3">
                  Giảng dạy theo cách của bạn
                </Typography>
                <Typography>
                  Xuất bản khóa học mong muốn, theo cách mong muốn và bạn luôn
                  có quyền kiểm soát nội dung của riêng mình.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} className={classes.item}>
              <img src={pic2} alt="" />
              <CardContent>
                <Typography component="h3">
                  Truyền cảm hứng cho học viên
                </Typography>
                <Typography>
                  Dạy những gì bạn biết và giúp học viên khám phá sở thích, tiếp
                  thu kỹ năng mới và thăng tiến trong sự nghiệp của họ.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} className={classes.item}>
              <img src={pic3} alt="" />
              <CardContent>
                <Typography component="h3">Nhận phần thưởng</Typography>
                <Typography>
                  Mở rộng mạng lưới nghề nghiệp, xây dựng kiến thức chuyên môn
                  và kiếm thu nhập từ mỗi lượt ghi danh có trả phí.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Teach

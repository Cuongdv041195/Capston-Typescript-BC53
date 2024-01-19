import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import classes from './styles.module.css'

const Carousel = () => {
  return (
    <div className={classes.background}>
      <Grid container>
        <Grid item xs={6}>
          {/* <img src={banner} width="1550px" /> */}
        </Grid>
        <Grid item xs={6}>
          <CardContent className={classes.content}>
            <Typography
              component="h1"
              style={{ fontSize: '40px', fontWeight: 'bold' }}
            >
              KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN
            </Typography>
            <Typography
              component="h3"
              style={{ fontSize: '20px', marginBottom: '50px', color: '#fff' }}
            >
              Trở Thành Lập Trình Viên Chuyên Nghiệp Tại Cypersoft
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                size="large"
                style={{ marginRight: '20px', color: '#fff' }}
                href="#course"
                className={classes.button}
              >
                Xem Khóa Học
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#footer"
                className={classes.button}
                style={{
                  background: 'none',
                  border: '1px solid pink',
                }}
              >
                Tư Vấn Học
              </Button>
            </CardActions>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Carousel

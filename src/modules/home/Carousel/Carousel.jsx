import {
  Button,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import classes from './styles.module.css'

const Carousel = () => {
  return (
    <div className={classes.background}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={6} className={classes.carousel_title}>
            <CardContent className={classes.content}>
              <Typography component="h1">KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</Typography>
              <Typography
                component="h3"
                style={{
                  fontSize: '20px',
                  marginBottom: '50px',
                  color: '#fff',
                }}
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
      </Container>
    </div>
  )
}

export default Carousel

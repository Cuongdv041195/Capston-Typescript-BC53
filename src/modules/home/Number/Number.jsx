import { CardContent, Container, Grid, Typography } from '@mui/material'
import pic1 from '../../../assets/health-clinic.png'
import pic2 from '../../../assets/graduated.png'
import pic3 from '../../../assets/deal.png'
import { CountUp } from 'use-count-up'
import classes from './styles.module.css'
const Number = () => {
  const onComplete = () => {
    // do your stuff here
    return { shouldRepeat: true, delay: 3 }
  }
  return (
    <div style={{ background: '#fff' }}>
      <Container style={{ textAlign: 'center', padding: '30px 0' }}>
        <Typography className={classes.title}>
          CYBERSOFT - ĐÀO TẠO LẬP TRÌNH THEO LỘ TRÌNH DỰ ÁN
        </Typography>
        <Typography
          style={{ marginBottom: '15px', fontSize: '20px', color: '#9e9e9e' }}
        >
          Thống kê qua con số
        </Typography>
        <Grid container>
          <Grid
            item
            xs={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className={classes.icon}>
              <img src={pic1} />
            </div>
            <CardContent style={{ padding: '0', textAlign: 'left' }}>
              {' '}
              <Typography className={classes.counter}>
                <CountUp
                  isCounting
                  end={3}
                  duration={3}
                  onComplete={onComplete}
                />{' '}
              </Typography>
              <Typography>Trung Tâm</Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className={classes.icon}>
              <img src={pic2} />
            </div>
            <CardContent style={{ padding: '0', textAlign: 'left' }}>
              {' '}
              <Typography className={classes.counter}>
                <CountUp
                  isCounting
                  end={6900}
                  duration={3}
                  onComplete={onComplete}
                />
                +
              </Typography>
              <Typography>Học Viên</Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className={classes.icon}>
              <img src={pic3} />
            </div>
            <CardContent style={{ padding: '0', textAlign: 'left' }}>
              {' '}
              <Typography className={classes.counter}>
                <CountUp
                  isCounting
                  end={200}
                  duration={3}
                  onComplete={onComplete}
                />
                +{' '}
              </Typography>
              <Typography>Đối Tác</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Number

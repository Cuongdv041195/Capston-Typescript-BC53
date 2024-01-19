import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const UserLayout = () => {
  return (
    <div style={{ backgroundColor: '#9f9d9f' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserLayout

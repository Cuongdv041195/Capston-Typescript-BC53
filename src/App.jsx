import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PATH } from './routes/path'
import HomeModule from './modules/home'
import UserLayout from './layouts/UserLayout'
import { UserProvider } from './contexts/UserContext/UserContext'
import Details from './modules/details/Details'
import NotFound from './modules/not-found'
import SignIn from './modules/auth/Signin/SignIn'
import SignUp from './modules/auth/Signup/SignUp'
import CourseCatalog from './modules/course-catalog'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<UserLayout />}>
            <Route index element={<HomeModule />} />
            <Route path={PATH.DETAILS} element={<Details />} />
            <Route path={PATH.COURSE_CATALOG} element={<CourseCatalog />} />

            <Route path={PATH.SIGN_IN} element={<SignIn />} />
            <Route path={PATH.SIGN_UP} element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App

import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Category from '../pages/Category'
import ProductDetail from '../pages/ProductDetail'
import Certificates from '../pages/Certificates'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import Layout from '../components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: 'products',
    element: <Layout><Products /></Layout>,
  },
  {
    path: 'products/:categoryId',
    element: <Layout><Category /></Layout>,
  },
  {
    path: 'products/:categoryId/:productId',
    element: <Layout><ProductDetail /></Layout>,
  },
  {
    path: 'certificates',
    element: <Layout><Certificates /></Layout>,
  },
  {
    path: 'about',
    element: <Layout><About /></Layout>,
  },
  {
    path: 'contact-us',
    element: <Layout><ContactUs /></Layout>,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export default router

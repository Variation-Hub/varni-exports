import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Category from '../pages/Category'
import ProductDetail from '../pages/ProductDetail'
import Certificates from '../pages/Certificates'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import Layout from '../components/Layout'
import PrivateLable from '../pages/PrivateLabel'
import Exports from '../pages/Exports'
import Imports from '../pages/Imports'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout seoProps={{
      title: 'Agriculture Products Manufacturers, Suppliers, and Exporters in India: Varni Exports',
      description: 'Varni Exports is a leading agriculture product manufacturer, supplier, and exporter in India. Specializing in peanuts, spices, sesame seeds, garlic, rice, wheat, pulses, and raisins, we deliver premium-quality products to global markets. Explore our range for excellence in quality and reliability.',
      keywords: 'Indian exports, spices, food products, agricultural exports, Varni Exports',
      canonicalUrl: 'https://varniexports.com'
    }}><Home /></Layout>,
  },
  {
    path: 'products',
    element: <Navigate to="/all-products" replace />,
  },
  {
    path: 'all-products',
    element: <Layout seoProps={{
      title: 'Products - Varni Exports | Premium Indian Products',
      description: 'Explore our extensive catalog of premium Indian spices, food products and agricultural commodities. High-quality products from Varni Exports.',
      keywords: 'Indian products, export products, spices, food products, agricultural products',
      canonicalUrl: 'https://varniexports.com/all-products'
    }}><Products /></Layout>,
  },
  {
    path: 'products/:categoryId',
    element: <Layout seoProps={{
      title: 'Product Categories - Varni Exports',
      description: 'Browse our extensive selection of premium Indian export products by category. Find quality spices, food products, and more.',
      keywords: 'product categories, Indian exports, product selection, Varni Exports',
      canonicalUrl: 'https://varniexports.com/products'
    }}><Category /></Layout>,
  },
  {
    path: 'products/:categoryId/:subcategoryId',
    element: <Layout seoProps={{
      title: 'Product Subcategories - Varni Exports',
      description: 'Explore our subcategories of premium Indian export products. Discover quality spices, food products and more from Varni Exports.',
      keywords: 'product subcategories, Indian exports, quality products, Varni Exports',
      canonicalUrl: 'https://varniexports.com/products'
    }}><ProductDetail /></Layout>,
  },
  {
    path: 'products/:categoryId/:subcategoryId/:productId',
    element: <Layout seoProps={{
      title: 'Product Details - Varni Exports',
      description: 'View detailed information about our premium quality export products. Specifications, features, and benefits of Varni Exports products.',
      keywords: 'product details, export products, Indian spices, food products, Varni Exports',
      canonicalUrl: 'https://varniexports.com/products'
    }}><ProductDetail /></Layout>,
  },
  {
    path: 'services/import',
    element: <Layout seoProps={{
      title: 'Import Services - Varni Exports',
      description: 'Professional import services for businesses looking to source products from India. Reliable import solutions from Varni Exports.',
      keywords: 'import services, Indian imports, sourcing from India, Varni Exports',
      canonicalUrl: 'https://varniexports.com/services/import'
    }}><Imports /></Layout>
  },
  {
    path: 'services/private-lable',
    element: <Navigate to="/services/private-lablel" replace />,
  },
  {
    path: 'services/private-lablel',
    element: <Layout seoProps={{
      title: 'Private Label Services - Varni Exports',
      description: 'Custom private label solutions for your business. Create your own branded products with Varni Exports premium quality ingredients.',
      keywords: 'private label, custom products, white label, branded products, Varni Exports',
      canonicalUrl: 'https://varniexports.com/services/private-lablel'
    }}><PrivateLable /></Layout>
  },
  {
    path: 'services/exports',
    element: <Layout seoProps={{
      title: 'Export Services - Varni Exports',
      description: 'Professional export services from India to global markets. Reliable export solutions for spices, food products and agricultural commodities.',
      keywords: 'export services, Indian exports, global trade, export solutions, Varni Exports',
      canonicalUrl: 'https://varniexports.com/services/exports'
    }}><Exports /></Layout>
  },
  {
    path: 'certificates',
    element: <Layout seoProps={{
      title: 'Certificates & Compliance - Varni Exports',
      description: 'View our quality certifications and compliance documentation. Varni Exports maintains high standards for all exported products.',
      keywords: 'export certificates, food safety certificates, quality compliance, export standards, Varni Exports',
      canonicalUrl: 'https://varniexports.com/certificates'
    }}><Certificates /></Layout>,
  },
  {
    path: 'about',
    element: <Layout seoProps={{
      title: 'About Varni Exports - Our Story & Mission',
      description: 'Learn about Varni Exports, a leading Indian export company. Our mission, values, and commitment to quality in global trade.',
      keywords: 'about Varni Exports, export company, Indian exports, company history, export mission',
      canonicalUrl: 'https://varniexports.com/about'
    }}><About /></Layout>,
  },
  {
    path: 'contact-us',
    element: <Layout seoProps={{
      title: 'Contact Varni Exports - Get in Touch With Us',
      description: 'Contact Varni Exports for inquiries about our products and services. Reach out to our team for export solutions and business opportunities.',
      keywords: 'contact Varni Exports, export inquiries, business contact, get in touch, export services',
      canonicalUrl: 'https://varniexports.com/contact-us'
    }}><ContactUs /></Layout>,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export default router

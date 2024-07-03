import Footer from '../Footer'
import Navbar from '../Navbar'
import ScrollToTop from '../scrollToTop'

function Layout({ children }) {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout


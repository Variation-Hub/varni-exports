
import certificateImage from '../../assets/Banner/certificate-banner.webp'
import Style from './style.module.css'
function Category() {

  return (
    <>
      <section className={Style.img_style}>
        <h1>Contact Us</h1>
        <img src={certificateImage} alt="" width="100%" height="100%" />
        <div className={Style.point}></div>
        <div className={Style.point2}></div>
      </section>
    </>
  )
}

export default Category

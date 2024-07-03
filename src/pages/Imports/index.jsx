import { importDetails } from '../../contant'
import Style from './style.module.css'
import ImportBanner from '../../assets/Banner/import-label.webp'

function Import() {
  return (
    <>
      <section className={Style.img_style}>
        <h1>Import</h1>
        <img src={ImportBanner} alt="" width="100%" height="100%" />
      </section>
      <div className="p-4">

      </div>
    </>
  )
}

export default Import

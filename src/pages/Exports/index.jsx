import { exportDetails } from '../../contant'
import Style from './style.module.css'
import ExportsBanner from '../../assets/Banner/export-label.webp'

function Exports() {
  return (
    <>
      <section className={Style.img_style}>
        <h1>Exports</h1>
        <img src={ExportsBanner} alt="" width="100%" height="100%" />
      </section>
      <div className="p-4">

      </div>
    </>
  )
}

export default Exports

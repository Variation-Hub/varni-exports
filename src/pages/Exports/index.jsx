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
        {Object.keys(exportDetails).map((value) => {
          if (
            !["title", "thumbImage", "path", "productImage", "last"].includes(
              value
            )
          ) {
            return (
              <div className="px-5">
                <h1 className="text-2xl">{value}</h1>
                <p className="text-justify">{exportDetails[value]}</p>
                <br />
              </div>
            );
          } else null;
        })}

        <h1 className="text-center text-[#003c54] text-2xl">{exportDetails.last}</h1>
      </div>
    </>
  )
}

export default Exports

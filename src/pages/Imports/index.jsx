import { importDetails } from "../../contant";
import Style from "./style.module.css";
import ImportBanner from "../../assets/Banner/import-label.webp";

function Import() {
  return (
    <>
      <section className={Style.img_style}>
        <h1>Import</h1>
        <img src={ImportBanner} alt="" width="100%" height="100%" />
      </section>
      <div className="p-4">
        {Object.keys(importDetails).map((value) => {
          if (
            !["title", "thumbImage", "path", "productImage", "last"].includes(
              value
            )
          ) {
            return (
              <div className="px-5">
                <h1 className="text-2xl">{value}</h1>
                <p className="text-justify">{importDetails[value]}</p>
                <br />
              </div>
            );
          } else null;
        })}

        <h1 className="text-center text-[#003c54] text-2xl">{importDetails.last}</h1>
      </div>
    </>
  );
}

export default Import;

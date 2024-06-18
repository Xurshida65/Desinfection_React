import "./css/style.css"
import firstImage from "../img/dezik1.jpg"
import secondImage from "../img/dezik3.png";
import thirdImage from "../img/dezik8.png";
import fourthImage from "../img/fourth.jpeg"
import { useTranslation } from "react-i18next";

export const Service = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="service" id="service">
        <div className="service_container">
          <h1 className="service_title">{t("service")}</h1>
          <div className="service_details">
            <div className="service_info" data-aos="flip-left">
              <img src={firstImage} alt="Image" className="service_image" />
              <h2 className="service_infoTitle">
                {t("serviceFirstInfoTitle")}
              </h2>
              <p className="service_subtitle">{t("serviceFirstSubtitle")}</p>
            </div>
            <div
              className="service_info"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <img src={thirdImage} alt="Image" className="service_image" />
              <h2 className="service_infoTitle">
                {t("serviceSecondInfoTitle")}
              </h2>
              <p className="service_subtitle">{t("serviceSecondSubtitle")}</p>
            </div>
            <div
              className="service_info"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <p className="service_subtitle">
                <img src={secondImage} alt="Image" className="service_image" />
                <h2 className="service_infoTitle">
                  {t("serviceThirdInfoTitle")}
                </h2>
                {t("serviceThirdSubtitle")}
              </p>
            </div>
            <div
              className="service_info"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <img src={fourthImage} alt="Image" className="service_image" />
              <h2 className="service_infoTitle">
                {t("serviceFourthInfoTitle")}
              </h2>
              <p className="service_subtitle">{t("serviceFourthSubtitle")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service

import { useTranslation } from "react-i18next";
import "./css/style.css"

export const SubService = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="sub_service">
        <div className="sub_container">
          <div className="sub_center">
            <h1 className="subService_title">{t("subServiceTitle")}</h1>
            <p className="subService_text">{t("subServiceText")}</p>
            <button className="header_btn">{t("getTouch")}</button>
          </div>
        </div>
      </div>
    </>
  );
}


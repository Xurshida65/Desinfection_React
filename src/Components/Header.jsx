import "./css/style.css"
import headerLogo from "../img/header_logo.png"
import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className="header" id="home">
        <div className="container">
          <div className="header_left" data-aos="fade-right">
            <h1 className="header_title">{t("disinfactionService")}</h1>
            <p className="header_text">{t("headerText")}</p>
            <div className="header_links">
              <button className="header_btn">{t("getTouch")}</button>
              <div className="header_iconBox">
                <a href="#" className="linkIcon">
                  <MdArrowOutward size={40} className="header_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="header_right" data-aos="flip-up">
            <img src={headerLogo} alt="" className="header_logo" />
          </div>
        </div>
      </div>
    </>
  );
};

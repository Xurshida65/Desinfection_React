import "./css/style.css"
import footerLogo from "../img/logo.png"
import { useTranslation } from "react-i18next";

export function Footer() {
  const {t} = useTranslation();
  
  return (
    <>
      <>
        <div className="footer">
          <div className="footer_container">
            <div className="footer_left">
              <img src={footerLogo} alt="footerLogo" className="footer_logo" />
            </div>
            <div className="footer_right" >
              <div className="footer_adresses">
                <p className="footer_text">
                  {t("footerText")}
                </p>
              </div>
              <div className="footer_adresses">
                <p className="footer_text">+998 94 099 34 34</p>
              </div>
              <hr />
              <div className="footer_socialMedia" >
                <button className="footer_btn">Instagram</button>
                <button className="footer_btn">Facebook</button>
                <button className="footer_btn">Telegram</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

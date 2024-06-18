import "./css/style.css";
import contactImage from "../img/dizinfact.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect} from "react";

export const Contact = () => {
  const {t} = useTranslation();
const [placeholder, setPlaceholder] = useState('')

    useEffect(
      () => {
        setPlaceholder(t("placeholder"));
      },
      [t]
    );

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact_container">
          <div className="contact_left" data-aos="fade-right">
            <h1 className="contact_title">{t("contactTitle")}</h1>
            <form action="#" className="contact_form">
              <div className="form_top">
                <input
                  type="text"
                  id="input_name"
                  className="form_input"
                  placeholder={placeholder}
                  required
                />
              </div>
              <div className="form_down">
                <input
                  type="tel"
                  placeholder="+998"
                  id="input_tel"
                  className="form_input"
                  required
                />
              </div>
            </form>
            <button className="contact_btn">{t("getTouch")}</button>
          </div>
          <div
            className="contact_right"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
          <div className="contact_image">
            <img src={contactImage} alt="Image" className="contact_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

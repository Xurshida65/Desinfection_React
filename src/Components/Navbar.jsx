import "./css/style.css";
import logo from "../img/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export const Navbar = ({ changeLang }) => {
  const { t } = useTranslation();
  const changeLanguageHandler = (e) => {
    changeLang(e.target.value);
  };
  return (
    <>
      <div className="nav">
        <div className="container">
          
          <img src={logo} alt="" className="navLogo" />
          <div className="nav_items">
            <ul className="menu_list">
              <li className="list_item">
                <a href="#home" className="item_link">
                  {t("mainPage")}
                </a>
              </li>
              <li className="list_item">
                <a className="item_link" href="#service">
                  {t("service")}
                </a>
              </li>
              <li className="list_item">
                <a href="#faq" className="item_link">
                  {t("faq")}
                </a>
              </li>
              <li className="list_item">
                <a href="#contact" className="item_link">
                  {t("contact")}
                </a>
              </li>
            </ul>
            <div className="nav_child">
              <select className="nav_select" onChange={changeLanguageHandler}>
                <option value="uz">Oʻzbekcha</option>
                <option value="ru">Русский</option>
              </select>
            </div>
            <button className="nav_btn">{t("getTouch")}</button>
          </div>
          <div className="nav_burger">
            <HiMenuAlt3 size={30} color="orange" />
          </div>
        </div>
      </div>
    </>
  );
};

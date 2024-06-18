import "./Components/css/style.css";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
import { Service } from "./Components/Service";
import { SubService } from "./Components/SubService";
import { Faq } from "./Components/Faq";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsRu from "./locale/translationsRu";
import translationsUz from "./locale/translationsUz";

i18n.use(initReactI18next).init({
  resources:{
    ru: {translation: translationsRu},
    uz: {translation: translationsUz}
  },
  lng: "uz",
  fallbackLng: "uz"
})

const App = () => {
  const changeLang = (value) => {
    i18n.changeLanguage(value)
  }
  return (
    <>
    <Navbar changeLang={changeLang} />
    <Header />
    <Service />
    <SubService />
    <Faq />
    <Contact />
    <Footer />
    </>
  );
};

export default App;

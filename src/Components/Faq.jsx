import "./css/style.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Faq = () => {
  const {t} = useTranslation();

  const [accordionItems, setAccordionItems] = useState([])

  useEffect(() => {
    setAccordionItems(t("data", {returnObjects: true}));
  }, [t])


  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if(selected == i){
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <>
      <div className="faq" id="faq">
        <div className="faq_container">
          <h1 className="faq_title" data-aos="zoom-in">
            {t("faqTitle")}
          </h1>
          <div className="faq_accordition">
            {accordionItems.map((item, i) => (
              <div key={item.id} className="item">
                <div className="accodition_items" onClick={() => toggle(i)}>
                  <h2 className="faq_question">{item.question}</h2>
                  <span>
                    {selected == i ? (
                      <IoIosArrowUp className="faqIcon" />
                    ) : (
                      <IoIosArrowDown className="faqIcon" />
                    )}
                  </span>
                </div>
                <div className={selected == i ? "content show" : "content"}>
                  <p className="answer_text">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


import { H2, ButtonXSM, Accordion, DropDownField, InputField, TextAreaField, Checkbox, } from "components";
import {
  H3Styled,
  ContentWrapper,
} from "./faq-slide.style";
import { formatPhoneNumber, withFormProvider } from "utils";
import { ButtonLG } from "components";
import { useState } from "react";
import { QuestionsFormModal } from "components";

import { contentAccordionFaq } from "./constant";

export const FaqSlide = withFormProvider(({ ...props }) => {

  const [isOpenForm, setOpenForm] = useState(false);
  const [title, setTitle] = useState("");
  const [chooseItem, setChooseItem] = useState({});

  return (
    <>
      <ContentWrapper px="lg" {...props} id="faq">
        <H3Styled>Это может быть полезным</H3Styled>
        <H2 mt="mdsm">
          Часто задаваемые
          <br />
          вопросы
        </H2>
        <ButtonXSM mt="lg" mb="xxlg">
          Все вопросы
        </ButtonXSM>
        {contentAccordionFaq.map(
          (
            { id, title, title2, desc1, desc2, descLink, Link1, Link2, Link3 },
            index
          ) => (
            <Accordion
              mt="xxsm"
              key={id}
              id={id}
              title={title}
              title2={title2}
              desc1={desc1}
              desc2={desc2}
              descLink={descLink}
              Link1={Link1}
              Link2={Link2}
              Link3={Link3}
              isShowing={chooseItem.id === id}
              onClick={() => {
                setChooseItem(contentAccordionFaq[index]);
              }}
            />
          )
        )}
        <ButtonLG
          onClick={(e) => {
            setOpenForm(true);
            setTitle(e.target.textContent);
          }}
          mt="mdlg"
          style={{ alignSelf: "center" }}
        >
          Задать вопрос
        </ButtonLG>
      </ContentWrapper>
      <QuestionsFormModal
        title={title}
        isOpen={isOpenForm}
        setOpen={setOpenForm}
      />
    </>
  );
});
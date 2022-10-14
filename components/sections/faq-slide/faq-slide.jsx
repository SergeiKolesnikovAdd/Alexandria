import { H2, ButtonXSM, Accordion, DropDownField, InputField, TextAreaField, Checkbox, } from "components";
import {
  H3Styled,
  ContentWrapper,
} from "./faq-slide.style";
import { formatPhoneNumber, withFormProvider } from "utils";
import { ButtonLG } from "components";
import { useState } from "react";
import { QuestionsFormModal } from "components";

const ServiceOptions = [
  { label: "color grading", value: "11" },
  { label: "VFX-design", value: "12" },
  { label: "Dailies", value: "13" },
];
const TypeOptions = [
  { label: "color grading", value: "11" },
  { label: "VFX-design", value: "12" },
  { label: "Dailies", value: "13" },
  // Заглушка
];
const TitleOptions = [
  { label: "color grading", value: "11" },
  { label: "VFX-design", value: "12" },
  { label: "Dailies", value: "13" },
  // Заглушка
];

export const FaqSlide = withFormProvider(({ ...props }) => {

  const [isOpenForm, setOpenForm] = useState(false);


  return (
    <ContentWrapper px="mdsm" {...props} id="faq">
      <H3Styled>Это может быть полезным</H3Styled>
      <H2 mt="mdsm">
        Часто задаваемые
        <br />
        вопросы
      </H2>
      <ButtonXSM mt="lg" mb="xxlg">
        Все вопросы
      </ButtonXSM>
      <Accordion
        title="Можно ли запустить на вашей платформе уже существующий (действующий) журнал?"
        title2=""
        desc1="Да, конечно. Вы можете загружать предыдущие статьи, выпуски и всю необходимую информацию на новый веб-сайт журнала."
        desc2=""
        descLink="Ссылки по данной теме:"
        Link1="Пакеты услуг и стоимость"
        Link2="Преимущества Alexandrina"
        Link3="Вход и регистрация"
      ></Accordion>
      <Accordion
        mt="xxsm"
        title="Можно ли издавать несколько журналов от одного учреждения на платформе Alexandrina?"
        title2=""
        desc1="Да, Вы можете публиковать столько журналов, сколько захотите. У каждой учетной записи есть свои настройки и список редакторов с доступом к платформе."
        desc2=""
        descLink="Ссылки по данной теме:"
        Link1="Пакеты услуг и стоимость"
        Link2="Преимущества Alexandrina"
        Link3="Вход и регистрация"
      ></Accordion>
      <Accordion
        mt="xxsm"
        title="Взимается ли плата за установку программного обеспечения и услуг Alexandrina?"
        title2=""
        desc1="Никаких затрат на установку не предусматривается. Для некоторых услуг требуется предоплата, но отдельная оплата за установку не взимается."
        desc2=""
        descLink="Ссылки по данной теме:"
        Link1="Пакеты услуг и стоимость"
        Link2="Преимущества Alexandrina"
        Link3="Вход и регистрация"
      ></Accordion>
      <Accordion
        mt="xxsm"
        title="Какие модели научных журналов вы запускаете на платформе Alexandrina?"
        title2=""
        desc1="Мы запускаем только журналы Открытого Доступа по модели Diamond Open Access (бесплатно для чтения, бесплатно для публикации)."
        desc2=""
        descLink="Ссылки по данной теме:"
        Link1="Пакеты услуг и стоимость"
        Link2="Преимущества Alexandrina"
        Link3="Вход и регистрация"
      ></Accordion>
      <Accordion
        mt="xxsm"
        title="Обладает ли Alexandrina авторскими правами на журналы или статьи, опубликованные через ее платформу?"
        title2=""
        desc1="Нет, все журналы, которые публикуются в Alexandrina, сохраняют за собой право собственности на авторские права и/или решают, какой политике в отношении авторских прав они будут следовать (например, CC BY 4.0)."
        desc2=""
        descLink="Ссылки по данной теме:"
        Link1="Пакеты услуг и стоимость"
        Link2="Преимущества Alexandrina"
        Link3="Вход и регистрация"
      ></Accordion>
      <ButtonLG
        onClick={() => {
          setOpenForm(true);
        }}
        mt="mdlg"
        style={{ alignSelf: "center" }}
      >
        Задать вопрос
      </ButtonLG>
      <QuestionsFormModal isOpen={isOpenForm} setOpen={setOpenForm} />
    </ContentWrapper>
  );
});
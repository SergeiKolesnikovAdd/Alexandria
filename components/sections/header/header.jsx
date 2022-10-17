import { useState } from "react";
import { Logo, ButtonSM, Name, FormModal} from "components";
import {
  HeaderWrapper,
  HeaderMenu,
  HeaderTitle,
  HeaderMenuItem,
} from "./header.style";

export const Header = () => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");



  return (
    <>
      <FormModal isOpen={isOpenForm} />
      <HeaderWrapper>
        <HeaderTitle>
          <Logo />
          <Name ml="mdsm" />
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem href="#about">О платформе</HeaderMenuItem>
          <HeaderMenuItem href="#offer">Тарифы</HeaderMenuItem>
          <HeaderMenuItem href="#advantages">Преимущества</HeaderMenuItem>
          <HeaderMenuItem href="#focus">Клиенты</HeaderMenuItem>
          <HeaderMenuItem href="#faq">FAQ</HeaderMenuItem>
        </HeaderMenu>
        <ButtonSM
          onClick={(e) => {
            setOpenForm(true);
            setModalTitle(e.target.textContent);
          }}>
          Оставить заявку
        </ButtonSM>
      </HeaderWrapper>
      <FormModal
        formName="Шапка"
        modalTitle={modalTitle}
        setOpen={setOpenForm}
        isOpen={isOpenForm}
      />
    </>
  );
};

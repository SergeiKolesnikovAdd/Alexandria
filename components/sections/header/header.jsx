import { useState } from "react";
import { QuestionsFormModal } from "components";
import { Logo, ButtonSM, Name } from "components";
import {
  HeaderWrapper,
  HeaderMenu,
  HeaderTitle,
  HeaderMenuItem,
} from "./header.style";

export const Header = () => {
  const [isOpenForm, setOpenForm] = useState (false);
  return (
    <>
      <HeaderWrapper>
        <HeaderTitle>
          <Logo />
          <Name ml="xsm" />
        </HeaderTitle>

        <HeaderMenu>
          <HeaderMenuItem href="#about">О платформе</HeaderMenuItem>
          <HeaderMenuItem href="#offer">Тарифы</HeaderMenuItem>
          <HeaderMenuItem href="#advantages">Преимущества</HeaderMenuItem>
          <HeaderMenuItem href="#focus">Клиенты</HeaderMenuItem>
          <HeaderMenuItem href="#faq">FAQ</HeaderMenuItem>
        </HeaderMenu>
        <ButtonSM
          onClick={() => {
            setOpenForm(true);
          }}
        >
          Оставить заявку
        </ButtonSM>
      </HeaderWrapper>
      <QuestionsFormModal
        isOpen={isOpenForm}
        setOpen={setOpenForm}
      />
    </>
  );
};

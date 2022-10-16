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
  const [title, setTitle] = useState("");



  return (
    <>
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
            setTitle(e.target.textContent);
          }}
        >
          Оставить заявку
        </ButtonSM>
      </HeaderWrapper>
      <FormModal title={title} setOpen={setOpenForm} isOpen={isOpenForm} />
    </>
  );
};

import { Logo, ButtonSM, Name, FormModal} from "components";
import {
  HeaderWrapper,
  HeaderMenu,
  HeaderTitle,
  HeaderMenuItem,
} from "./header.style";
import Link from "next/link";
import { useState } from "react";

export const Header = ({ isOpenForm, setOpenForm }) => {
  const [modalTitle, setModalTitle] = useState("");

  return (
    <>
      <HeaderWrapper isOpenForm={isOpenForm}>
        <HeaderTitle>
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/">
            <Name isOpenForm={isOpenForm} ml="mdsm" />
          </Link>
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem isOpenForm={isOpenForm} href="#about">
            О платформе
          </HeaderMenuItem>
          <HeaderMenuItem isOpenForm={isOpenForm} href="#offer">
            Тарифы
          </HeaderMenuItem>
          <HeaderMenuItem isOpenForm={isOpenForm} href="#focus">
            Клиенты
          </HeaderMenuItem>
          <HeaderMenuItem isOpenForm={isOpenForm} href="#faq">
            FAQ
          </HeaderMenuItem>
        </HeaderMenu>
        <ButtonSM
          onClick={(e) => {
            setOpenForm(true);
            setModalTitle(e.target.textContent);
          }}
        >
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

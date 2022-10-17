import { useState } from "react";
import { Logo, ButtonSM, Name, FormModal} from "components";
import {
  HeaderWrapper,
  HeaderMenu,
  HeaderTitle,
  HeaderMenuItem,
} from "./header.style";
import Link from "next/link";

export const Header = () => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <>
      <FormModal isOpen={isOpenForm} />
      <HeaderWrapper isOpen={isOpenForm}>
        <HeaderTitle>
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/">
            <Name isOpen={isOpenForm} ml="mdsm" />
          </Link>
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem isOpen={isOpenForm} href="#about">
            О платформе
          </HeaderMenuItem>
          <HeaderMenuItem isOpen={isOpenForm} href="#offer">
            Тарифы
          </HeaderMenuItem>
          <HeaderMenuItem isOpen={isOpenForm} href="#focus">
            Клиенты
          </HeaderMenuItem>
          <HeaderMenuItem isOpen={isOpenForm} href="#faq">
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

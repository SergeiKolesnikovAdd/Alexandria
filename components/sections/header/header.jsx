import { Logo, ButtonSM, Name, FormModal } from "components";
import {
  HeaderWrapper,
  HeaderMenu,
  HeaderTitle,
  HeaderMenuItem,
} from "./header.style";
import Link from "next/link";
import { useState } from "react";

export const Header = ({ isColored, setColored }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <>
      <HeaderWrapper isOpen={isColored}>
        <HeaderTitle>
          <Link href="#main">
            <Logo />
          </Link>
          <Link href="#main">
            <Name isOpen={isColored} ml="mdsm" />
          </Link>
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem isOpen={isColored} href="#about">
            О платформе
          </HeaderMenuItem>
          <HeaderMenuItem isOpen={isColored} href="#offer">
            Тарифы
          </HeaderMenuItem>
          <HeaderMenuItem isOpen={isColored} href="#focus">
            Клиенты
          </HeaderMenuItem>
          <HeaderMenuItem isOpen={isColored} href="#faq">
            FAQ
          </HeaderMenuItem>
        </HeaderMenu>
        <ButtonSM
          onClick={(e) => {
            setOpenForm(true);
            setModalTitle(e.target.textContent);
            setColored(true);
          }}
        >
          Оставить заявку
        </ButtonSM>
      </HeaderWrapper>
      <FormModal
        setColored={setColored}
        formName="Шапка"
        modalTitle={modalTitle}
        setOpen={setOpenForm}
        isOpen={isOpenForm}
      />
    </>
  );
};

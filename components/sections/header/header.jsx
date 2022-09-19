import { Logo } from "components";
import { Name } from "components";
import { ButtonMD } from "components";
import { HeaderWrapper, HeaderMenu, HeaderTitle, HeaderMenuItem } from "./header.style";

export const Header = () => {
  return (
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
      <ButtonMD>Оставить заявку</ButtonMD>
    </HeaderWrapper>
  );
};

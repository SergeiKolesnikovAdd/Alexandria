import { Logo } from "components";
import { ButtonLG } from "components";
import { Name } from "components";
import { ButtonMD } from "components";
import { Text } from "components";
import { HeaderWrapper, HeaderMenu, HeaderTitle, HeaderMenuItem } from "./header.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <Logo />
        <Name ml="xsm" />
      </HeaderTitle>

      <HeaderMenu>
        <HeaderMenuItem>О платформе</HeaderMenuItem>
        <HeaderMenuItem>Тарифы</HeaderMenuItem>
        <HeaderMenuItem>Журналы</HeaderMenuItem>
        <HeaderMenuItem>Блог</HeaderMenuItem>
        <HeaderMenuItem>FAQ</HeaderMenuItem>
      </HeaderMenu>
      <ButtonMD>Оставить заявку</ButtonMD>
    </HeaderWrapper>
  );
};

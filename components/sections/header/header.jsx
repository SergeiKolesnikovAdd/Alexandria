import { Logo } from "components";
import { Text } from "components";
import { HeaderWrapper, HeaderMenu } from "./header.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderMenu>
        <Text>О платформе</Text>
        <Text>Тарифы</Text>
        <Text>Журналы</Text>
        <Text>Блог</Text>
        <Text>FAQ</Text>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

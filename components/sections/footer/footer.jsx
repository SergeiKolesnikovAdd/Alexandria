import { Caption, Logo, H3} from "components";
import { colors } from "styles";
import { Telegram, Instagram, Twitter, Vk, Youtube } from "../../common";
import {
  FooterColumn,
  FooterItem,
  FooterRow,
  FooterWrapper,
  InfoTitle,
  LogoWrapper,
} from "./footer.style";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
      <FooterColumn>
        <FooterItem>Что мы предлагаем?</FooterItem>
        <FooterItem>Для кого наша платформа?</FooterItem>
        <FooterItem>Почему Alexandrina</FooterItem>
        <FooterItem>Пакеты услуг</FooterItem>
        <FooterItem>Последние новости</FooterItem>
        <FooterItem>Часто задаваемые вопросы</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <Caption mb={"sm"} style={{ color: colors.red }}>
          Свяжитесь с нами
        </Caption>
        <H3 mb={"lg"}>info@alexandrina.ru</H3>
        <Caption mb={"sm"} style={{ color: colors.red }}>
          Адрес
        </Caption>
        <H3 mb={"lg"}>
          624372, Россия, Тюмень, <br /> ул. Ленина, 17
        </H3>
      </FooterColumn>
      <FooterColumn style={{ flexDirection: "row" }}>
        <LogoWrapper>
          <Telegram />
        </LogoWrapper>
        <LogoWrapper>
          <Twitter />
        </LogoWrapper>
        <LogoWrapper>
          <Instagram />
        </LogoWrapper>
        <LogoWrapper>
          <Vk />
        </LogoWrapper>
        <LogoWrapper>
          <Youtube />
        </LogoWrapper>
      </FooterColumn>
    </FooterWrapper>
  );
};

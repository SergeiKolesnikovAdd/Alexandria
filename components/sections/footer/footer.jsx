import { Name } from "components";
import { Caption, Logo, H3} from "components";
import { colors } from "styles";
import { Telegram, Instagram, Twitter, Vk, Youtube } from "../../common";
import {
  Deviant,
  FooterColumn,
  FooterLink,
  FooterLogo,
  FooterRow,
  FooterWrapper,
  LogoWrapper,
} from "./footer.style";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRow my="xxxlg">
        <FooterLogo>
          <Logo />
          <Name/>
        </FooterLogo>
        <FooterColumn>
          <FooterLink href="#" mb="md">
            Что мы предлагаем?
          </FooterLink>
          <FooterLink href="#" mb="md">
            Для кого наша платформа?
          </FooterLink>
          <FooterLink href="#" mb="md">
            Почему Alexandrina
          </FooterLink>
          <FooterLink href="#" mb="md">
            Пакеты услуг
          </FooterLink>
          <FooterLink href="#" mb="md">
            Последние новости
          </FooterLink>
          <FooterLink href="#" mb="md">
            Часто задаваемые вопросы
          </FooterLink>
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
      </FooterRow>
      <FooterRow mb="lg">
        <FooterLink href="#">Alexandrina 2022</FooterLink>
        <FooterRow>
          <FooterLink mr={"lg"} href="#">
            Privacy Policy
          </FooterLink>
          <FooterLink mr={"lg"} href="#">
            Terms & Conditions
          </FooterLink>
          <Deviant mb={"sm"} href="https://www.deviant-studio.com">
            Сделано в Deviant
          </Deviant>
        </FooterRow>
      </FooterRow>
    </FooterWrapper>
  );
};

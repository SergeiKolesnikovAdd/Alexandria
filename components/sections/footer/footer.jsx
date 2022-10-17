import { Caption, H3, Name } from "components";
import { colors } from "styles";
import { Telegram, Instagram, Twitter, Vk, Youtube } from "../../common";
import {
  Deviant,
  FooterColumn,
  FooterLink,
  FooterLogo,
  FooterRow,
  FooterRowBottom,
  FooterRowflex,
  FooterRowGrid,
  FooterRowPhone,
  FooterRowSecondBottom,
  FooterWrapper,
  IconAlexandrina,
  LogoWrapper,
} from "./footer.style";
import Link from "next/link";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRow my="xxlg">
        <FooterLogo>
          <IconAlexandrina />
          <Name />
        </FooterLogo>
        {/* <FooterColumn>
          <FooterLink href="#about" mb="md">
            Что мы предлагаем?
          </FooterLink>
          <FooterLink href="#focus" mb="md">
            Для кого наша платформа?
          </FooterLink>
          <FooterLink href="#advantages" mb="md">
            Почему Alexandrina?
          </FooterLink>
          <FooterLink href="#offer" mb="md">
            Пакеты услуг
          </FooterLink>
          <FooterLink href="#faq" mb="md">
            Часто задаваемые вопросы
          </FooterLink>
        </FooterColumn> */}
        <FooterRowPhone>
          <FooterColumn>
            <Caption mb="sm" style={{ color: colors.red }}>
              Свяжитесь с нами
            </Caption>
            <H3 mb="lg">info@alexandrina.tech</H3>
          </FooterColumn>
        </FooterRowPhone>
        <FooterRowPhone>
          <FooterColumn>
            <Caption mb="sm" style={{ color: colors.red }}>
              Адрес
            </Caption>
            <H3 mb="lg">
              398032, Россия, г. Липецк, <br /> ул. Циолковского, д 8/1
            </H3>
          </FooterColumn>
        </FooterRowPhone>
        {/* <FooterColumn style={{ gridAutoFlow: "column" }}>
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
        </FooterColumn> */}
      </FooterRow>
      <FooterRowBottom mb="lg">
        <FooterLink href="#">Alexandrina 2022</FooterLink>
        <FooterRowSecondBottom>
          <FooterLink mr="lg" href="/politica" target="_blank">
            Privacy Policy
          </FooterLink>
          {/* <FooterLink mr={"lg"} href="#">
            Terms & Conditions
          </FooterLink> */}
          <Deviant href="https://www.deviant-studio.com" target="_blank">
            Сделано в Deviant
          </Deviant>
        </FooterRowSecondBottom>
      </FooterRowBottom>
    </FooterWrapper>
  );
};

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
        <FooterLogo href="#main">
          <IconAlexandrina />
          <Name />
        </FooterLogo>
        {/* <FooterColumn>
          <FooterLink href="about" mb="md">
            Что мы предлагаем?
          </FooterLink>
          <FooterLink href="focus" mb="md">
            Для кого наша платформа?
          </FooterLink>
          <FooterLink href="advantages" mb="md">
            Почему Alexandrina?
          </FooterLink>
          <FooterLink href="offer" mb="md">
            Пакеты услуг
          </FooterLink>
          <FooterLink href="faq" mb="md">
            Часто задаваемые вопросы
          </FooterLink>
        </FooterColumn> */}
        <FooterRowPhone>
          <FooterColumn>
            <Caption mb="sm" style={{ color: colors.red }}>
              Свяжитесь с нами
            </Caption>
            <H3 mb="lg"><Link href="mailto:info@alexandrina.tech"><a target="_blank" style={{ color: "inherit" }}>info@alexandrina.tech</a></Link></H3>
          </FooterColumn>
        </FooterRowPhone>
        <FooterRowPhone>
          <FooterColumn>
            <Caption mb="sm" style={{ color: colors.red }}>
              Адрес
            </Caption>
            <H3 mb="lg">
              <Link href="https://yandex.ru/maps/9/lipetsk/house/ulitsa_tsiolkovskogo_8_1/Z0AYcwJhSUEEQFtofXpwdH9lZA==/?ll=39.559440%2C52.613325&z=15.29"><a target="_blank" style={{ color: "inherit" }}>398032, Россия, г. Липецк, <br /> ул. Циолковского, д 8/1</a></Link>
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
        <FooterLink href="#main">Alexandrina 2022</FooterLink>
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
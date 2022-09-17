import { Logo } from "components";
import { FooterColumn, FooterItem, FooterWrapper } from "./footer.style";

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
    </FooterWrapper>
  );
};
